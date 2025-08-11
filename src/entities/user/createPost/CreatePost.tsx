'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createPostSchema, CreatePostFormData } from '@/shared/schemas/forms/createPost'
import { validateImageFile } from '@/shared/utils/validateImageFile'
import style from './CreatePost.module.scss'
import {
  addFile,
  clearPostEditor,
  removeFile,
  setDescription,
  setError,
} from '@/shared/store/postEditorSlice'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import { Typography } from '@/shared/components/Typography'
import { useCreatePostMutation } from '@/shared/store/postApi'
import { TopLoader } from '@/shared/components/topLoader/TopLoader'
import { isApiError } from '@/shared/utils/errors/isApiError'

export const CreatePost = () => {
  const [createPost, { isLoading }] = useCreatePostMutation()
  const dispatch = useAppDispatch()
  const { files, error, description } = useAppSelector(state => state.postEditor)

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
    const totalFiles = files.length + selectedFiles.length
    if (totalFiles > 10) {
      dispatch(setError('You can upload up to 10 files'))
      return
    }
    dispatch(setError(null))
    Array.from(selectedFiles).forEach(file => {
      const errors = validateImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        const preview = errors.length > 0 ? null : (reader.result as string)
        dispatch(addFile(file, preview, errors.length > 0 ? errors : undefined))
      }
      reader.readAsDataURL(file)
    })
    event.target.value = ''
  }

  const onSubmit = async (data: CreatePostFormData) => {
    const formData = new FormData()
    if (data.description) formData.append('description', data.description)
    files.forEach(({ file }) => formData.append('photos', file))

    try {
      await createPost(formData).unwrap()
      dispatch(clearPostEditor())
      form.reset()
    } catch (err) {
      if (isApiError(err)) {
        const { status, data } = err
        if (status === 400 && data?.errors?.length) {
          // покажет первое сообщение в массиве ошибки
          dispatch(setError(data.errors[0].message))
        } else if (status === 401) {
          dispatch(setError('You are not authorized'))
        } else if (status === 429) {
          dispatch(setError('Too many requests. Please try again later.'))
        } else {
          dispatch(setError('Unknown error occurred'))
        }
      } else {
        dispatch(setError('Unexpected error occurred'))
      }
    }
  }

  const handleRemoveFile = (id: string) => {
    dispatch(removeFile(id))
    const nextFiles = files.filter(file => file.id !== id)
    if (nextFiles.length <= 10) {
      dispatch(setError(null))
    }
  }

  const hasInvalidFiles = files.some(f => f.errors && f.errors.length > 0)

  return (
    <>
    <TopLoader isActive={isLoading}/> 
    {/* если будете юзать как модалку этот компонент возможно TopLoader надо в родителя прописать а тут убрать */}
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={style.form}
    >
      <textarea
        {...form.register('description')}
        placeholder='Write a description...'
        onChange={e => dispatch(setDescription(e.target.value))}
        value={description}
        className={style.textarea}
      />
      {form.formState.errors.description && (
        <span className={style.errorMessage}>{form.formState.errors.description.message}</span>
      )}
      <label className={`${style.fileLabel} ${files.length >= 10 ? style.disabledLabel : ''}`}>
        Choose File
        <Input
          variant='inputDefault'
          type='file'
          accept='.jpg,.jpeg,.png'
          multiple
          onChange={handleFileChange}
          className={style.hiddenInput}
          disabled={files.length >= 10}
        />
      </label>
      {error && <Typography className={style.errorText}>{error}</Typography>}
      <div className={style.filesContainer}>
        {files.map(({ id, preview, errors }, i) => (
          <div
            key={id}
            className={`${style.filePreview} ${errors ? style.error : ''}`}
          >
            {preview ? (
              <img
                src={preview}
                alt={`preview-${i}`}
              />
            ) : (
              errors?.join(', ')
            )}
            <Button
              variant='text'
              type='button'
              onClick={() => handleRemoveFile(id)}
              className={style.removeButton}
            >
              ×
            </Button>
          </div>
        ))}
      </div>
      <Button
        variant='primary'
        type='submit'
        disabled={isLoading || hasInvalidFiles}
        className={`${style.submitButton} ${
          isLoading || hasInvalidFiles ? style.disabled : ''
        }`}
      >
        Publish
      </Button>
    </form>
    </>
  )
}