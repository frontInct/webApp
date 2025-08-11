import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseQuery'
import { Post, PostsResponse } from '../types/Post'

export type CreatePostPayload = FormData

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    // получение постов юзера с пагинацией и сортировкой
    getPostsByUser: builder.query<
      PostsResponse,
      { userId: string; pageNumber?: number; pageSize?: number; sortBy?: string; sortDirection?: 'asc' | 'desc' }
    >({
      query: ({ userId, pageNumber = 1, pageSize = 8, sortBy = 'createdAt', sortDirection = 'desc' }) =>
        `users/${userId}/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
    }),
    getPostById: builder.query<Post, string>({
      query: (postId) => `posts/${postId}`,
    }),
    createPost: builder.mutation<Post, CreatePostPayload>({
      query: (formData) => ({
        url: 'posts',
        method: 'POST',
        body: formData,
      }),
    }),
    deletePost: builder.mutation<void, string>({
      query: (postId) => ({
        url: `posts/${postId}`,
        method: 'DELETE'
      })
    })
  }),
})

export const {
  useGetPostsByUserQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
} = postApi
