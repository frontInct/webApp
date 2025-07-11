export type Post = {
  id: string
  description: string | null
  photoUrls: string[]
  createdAt: string
  updatedAt: string
  published: boolean
  userId: string
  likesCount: number
  commentsCount?: number
}

// Публичный тип поста (для отображения в ленте, профиле и т.д.)
export type PublicPost = Omit<Post, 'userId'> & {
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
