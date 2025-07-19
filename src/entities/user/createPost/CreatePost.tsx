'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createPostSchema, CreatePostFormData } from '@/shared/schemas/forms/createPost'
import { validateImageFile } from '@/shared/utils/validateImageFile'
// import { PostService } from '@/shared/services/PostService'

import {
  addFiles,
  addPreview,
  clearPostEditor,
  setDescription,
  setError,
} from '@/shared/store/postEditorSlice'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useAppSelector } from '@/shared/hooks/useAppSelector'

export const CreatePost = () => {
  const dispatch = useAppDispatch()
  const { files, previews, error, description } = useAppSelector(state => state.postEditor)

  const form = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
    mode: 'onChange',
    defaultValues: {
      description,
    },
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
    if (!selectedFiles) return

    const validFiles: File[] = []

    if (files.length + selectedFiles.length > 10) {
      dispatch(setError('Максимум 10 файлов'))
      return
    }

    Array.from(selectedFiles).forEach(file => {
      if (validateImageFile(file)) {
        validFiles.push(file)

        const reader = new FileReader()
        reader.onloadend = () => {
          dispatch(addPreview(reader.result as string))
        }
        reader.readAsDataURL(file)
      } else {
        dispatch(setError('Неверный формат файла или размер > 20MB'))
      }
    })
    dispatch(addFiles(validFiles))
  }

  const onSubmit = async (data: CreatePostFormData) => {
    const formData = new FormData()
    if (data.description) formData.append('description', data.description)
    files.forEach(file => formData.append('photos', file))

    try {
      // await PostService.createPost(formData)
      console.log('Отправка...', { formData })
      dispatch(clearPostEditor())
      form.reset()
    } catch (err) {
      console.error('Ошибка при создании поста', err)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <textarea
        {...form.register('description')}
        placeholder='Описание поста'
        onChange={e => dispatch(setDescription(e.target.value))}
        value={description}
        style={{color: 'black'}}
      />
      {form.formState.errors.description && (
        <span>{form.formState.errors.description.message}</span>
      )}

      <input
        type='file'
        accept='.jpg,.jpeg,.png'
        multiple
        onChange={handleFileChange}
      />
      {error && <span>{error}</span>}

      <div>
        {previews.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`preview-${index}`}
            style={{width: 100, height: 100, objectFit: 'cover'}} // заменить стилями
          />
        ))}
      </div>

      <button
        type='submit'
        disabled={form.formState.isSubmitting}
      >
        Опубликовать
      </button>
    </form>
  )
}