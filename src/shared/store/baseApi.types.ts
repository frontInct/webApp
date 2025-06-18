export type userRegistration = {
  id: string
  email: string
  username: string
  createdAt: string
}

export type ErrorResponseUR = {
  errorsMessages: [
    {
      field: string
      message: string
    },
  ]
}
