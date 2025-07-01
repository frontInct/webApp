type ApiError = {
  data?: {
    errors?: Array<{ field?: string; message: string }>
    message?: string
  }
  status?: number
}

export function isApiError(obj: unknown): obj is ApiError {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'data' in obj &&
    (typeof (obj as Record<string, unknown>).data === 'object' ||
      typeof (obj as Record<string, unknown>).data === 'undefined')
  )
}
