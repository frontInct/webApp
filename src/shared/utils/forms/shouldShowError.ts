export function shouldShowError<T extends Record<string, unknown>>(
  field: keyof T,
  touchedFields: Partial<Record<keyof T, boolean>>,
  errors: Partial<Record<keyof T, { message?: string }>>,
  //watch?: (field: keyof T) => unknown
): boolean {
  return Boolean(touchedFields[field] && errors[field]?.message)
}