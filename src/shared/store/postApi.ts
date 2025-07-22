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
        `api/v1/users/${userId}/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
    }),
    getPostById: builder.query<Post, string>({
      query: (postId) => `api/v1/posts/${postId}`,
    }),
    createPost: builder.mutation<Post, CreatePostPayload>({
      query: (formData) => ({
        url: 'api/v1/posts',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
})

export const {
  useGetPostsByUserQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
} = postApi
