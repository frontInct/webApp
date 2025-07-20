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

export const CreatePost = () => {
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
  }

  const onSubmit = async (data: CreatePostFormData) => {
    const formData = new FormData()
    if (data.description) formData.append('description', data.description)
    files.forEach(({ file }) => formData.append('photos', file))

    try {
      // await PostService.createPost(formData)
      // console.log('Sending...', { formData })
      dispatch(clearPostEditor())
      form.reset()
    } catch (err) {
      // console.error('Error creating post', err)
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
        disabled={form.formState.isSubmitting || hasInvalidFiles}
        className={`${style.submitButton} ${
          form.formState.isSubmitting || hasInvalidFiles ? style.disabled : ''
        }`}
      >
        Publish
      </Button>
    </form>
  )
}