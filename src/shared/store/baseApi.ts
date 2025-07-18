import { createApi } from '@reduxjs/toolkit/query/react'
import {
  userLogin,
  userPasswordRecovery,
  userRegistration,
  userRegistrationConfirmation,
  userRegistrationResponse,
  userResendConfirmationCode,
} from '../types/api/index'

import { baseQueryWithReauth } from './baseQuery';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  // baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  baseQuery: baseQueryWithReauth, // подключил baseQueryWithReauth вместо стандартного fetchBaseQuery, посмотрим нормально ли работает
  endpoints: builder => ({
    registration: builder.mutation<userRegistrationResponse, userRegistration>({
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
    }), // затестить логин с baseQuery нужен ли он тут
    logOut: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
    passwordRecovery: builder.mutation<
      userPasswordRecovery,
      { email: string; recaptchaToken: string }
    >({
      query: body => ({
        url: 'auth/password-recovery',
        method: 'POST',
        body,
      }),
    }),
    forgotPassword: builder.mutation<void, { code: string; password: string }>({
      query: body => ({
        url: 'auth/forgot-password',
        method: 'POST',
        body,
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
  usePasswordRecoveryMutation,
  useForgotPasswordMutation,
} = baseApi
