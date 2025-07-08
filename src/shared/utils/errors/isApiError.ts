type ApiError = {
  data?: {
    errors?: Array<{ field?: string; message: string }>
    message?: string
  }
  status?: number
}

export function isApiError(obj: unknown): obj is ApiError {
  if (typeof obj !== 'object' || obj === null) return false

  const maybe = obj as Record<string, unknown>

  const hasData =
    !('data' in maybe) ||
    typeof maybe.data === 'undefined' ||
    typeof maybe.data === 'object'

  const hasStatus =
    !('status' in maybe) || typeof maybe.status === 'number'

  return hasData && hasStatus
}