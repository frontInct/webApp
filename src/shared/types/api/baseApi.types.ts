export type userRegistration = {
  email: string
  username: string
  password: string
}

export type userRegistrationResponse = {
  id: string
  email: string
  username: string
  createdAt: string
}

export type userRegistrationConfirmation = {
  code: string
}

export type userResendConfirmationCode = {
  email: string
}

export type userLogin = {
  loginOrEmail: string
  password: string
}

export type registrationError = {
  errorsMessages: [
    {
      field: string
      message: string
    },
  ]
}

export type registrationSuccess = {
  accessToken: string
}

export type userPasswordRecovery = {
  email: string
  recaptchaToken: string
}