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

  const hasStatus = !('status' in maybe) || typeof maybe.status === 'number'
  const data = maybe.data

  const hasData =
    !('data' in maybe) ||
    typeof data === 'undefined' ||
    (typeof data === 'object' && data !== null && !Array.isArray(data))

  return hasData && hasStatus
}