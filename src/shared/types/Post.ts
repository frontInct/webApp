// src/types/Post.ts

export type Post = {
  id: string
  description?: string
  photos: string[] // массив URL'ов изображений
  createdAt: string
  updatedAt: string
  published: boolean
  authorId: string
  likesCount: number
  commentsCount?: number
}

// Публичный тип поста (для отображения в ленте, профиле и т.д.)
export type PublicPost = Omit<Post, 'authorId'> & {
  author: {
    name: string
    avatar?: string
  }
  isLikedByCurrentUser?: boolean
  isSavedByCurrentUser?: boolean
}

// Превью поста для списка (например, в ленте или профиле)
export type PostPreview = {
  id: string
  photo: string // первое изображение
  description?: string
  createdAt: string
}

// Тип для создания поста (отправляется в FormData)
export type CreatePostPayload = {
  description?: string
  photos: File[]
}

// Тип комментария (если понадобятся комментарии)
export type Comment = {
  id: string
  postId: string
  author: {
    name: string
    avatar?: string
  }
  content: string
  createdAt: string
  likesCount: number
  isLikedByCurrentUser?: boolean
  parentCommentId?: string
}
