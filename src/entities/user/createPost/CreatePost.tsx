import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createPostSchema, CreatePostFormData } from '@/shared/schemas/forms/createPost'
import { validateImageFile } from '@/shared/utils/validateImageFile'
// import { PostService } from '@/shared/services/PostService' // ← позже, когда будет API

export const CreatePost = () => {
  const form = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
    mode: 'onChange',
    defaultValues: {
      description: '',
    },
  })

  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
    if (!selectedFiles) return

    const validFiles: File[] = []
    const newPreviews: string[] = []

    if (files.length + selectedFiles.length > 10) {
      setError('Максимум 10 файлов')
      return
    }

    Array.from(selectedFiles).forEach((file) => {
      if (validateImageFile(file)) {
        validFiles.push(file)

        const reader = new FileReader()
        reader.onloadend = () => {
          setPreviews((prev) => [...prev, reader.result as string])
        }
        reader.readAsDataURL(file)
      } else {
        setError('Неверный формат файла или размер > 20MB')
      }
    })

    setFiles((prev) => [...prev, ...validFiles])
  }

  const onSubmit = async (data: CreatePostFormData) => {
    const formData = new FormData()
    if (data.description) formData.append('description', data.description)
    files.forEach((file) => formData.append('photos', file))

    try {
      // await PostService.createPost(formData)
      console.log('Отправка...', { formData })
      // Очистка формы после успешной отправки:
      form.reset()
      setFiles([])
      setPreviews([])
      setError(null)
    } catch (err) {
      console.error('Ошибка при создании поста', err)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <textarea
        {...form.register('description')}
        placeholder="Описание поста"
        className="border p-2 rounded"
      />
      {form.formState.errors.description && (
        <span className="text-red-500">{form.formState.errors.description.message}</span>
      )}

      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        multiple
        onChange={handleFileChange}
      />
      {error && <span className="text-red-500">{error}</span>}

      <div className="flex gap-2 flex-wrap">
        {previews.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`preview-${index}`}
            className="w-24 h-24 object-cover rounded"
          />
        ))}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={form.formState.isSubmitting}
      >
        Опубликовать
      </button>
    </form>
  )
}
