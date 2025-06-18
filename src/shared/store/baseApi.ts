import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userRegistration } from './baseApi.Types'

const BASE_URL = 'https://justmyshots.ru/api/v1#/'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    registration: builder.mutation<userRegistration, { email: string; username: string }>({
      query: credentials => ({
        url: 'auth/registration',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
  // endpoints: builder => ({
  //   registration: builder.mutation<
  //     userRegistration,
  //     { id: string; email: string; username: string; createdAt: string }
  //   >({
  //     query: credentials => ({
  //       url: 'auth/registration',
  //       method: 'POST',
  //       body: credentials,
  //     }),
  //   }),
  // }),
})
