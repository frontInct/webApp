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
  accessToken: string
}

export type registrationSuccess = {
  accessToken: string
}

export type userPasswordRecovery = {
  email: string
  recaptchaToken: string
}

// --------------------
// Errors
// --------------------

export type registrationError = {
  errorsMessages: {
    field: string
    message: string
  }[]
}

export type FieldError = {
  field: string
  message: string
}

export type BadRequestError = {
  status: 400
  data: {
    errorsMessages: FieldError[]
  }
}

export type UnauthorizedError = {
  status: 401
  data: {
    message: string
  }
}

export type NotFoundError = {
  status: 404
  data: {
    message: string
  }
}
