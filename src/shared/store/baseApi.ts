import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  userLogin,
  userRegistration,
  userRegistrationConfirmation,
  userResendConfirmationCode,
} from './baseApi.types'

const BASE_URL = 'https://justmyshots.ru/api/v1#/'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    registration: builder.mutation<
      userRegistration,
      { email: string; userName: string; password: string }
    >({
      query: credentials => ({
        url: 'auth/registration',
        method: 'POST',
        body: credentials,
      }),
    }),
    registrationConfirmation: builder.mutation<userRegistrationConfirmation, { code: string }>({
      query: body => ({
        url: 'auth/registration-confirmation',
        method: 'POST',
        body,
      }),
    }),
    resendConfirmationCode: builder.mutation<userResendConfirmationCode, { email: string }>({
      query: body => ({
        url: 'auth/resend-confirmation-code',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<userLogin, { loginOrEmail: string; password: string }>({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
    logOut: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useRegistrationMutation,
  useRegistrationConfirmationMutation,
  useResendConfirmationCodeMutation,
  useLoginMutation,
  useLogOutMutation,
} = baseApi
