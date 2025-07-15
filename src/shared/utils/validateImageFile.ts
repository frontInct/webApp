import { ALLOWED_IMAGE_TYPES, MAX_FILE_SIZE_BYTES } from "../constants/upload"

export function validateImageFile(file: File): boolean {
  const isValidType = ALLOWED_IMAGE_TYPES.includes(file.type)
  const isValidSize = file.size <= MAX_FILE_SIZE_BYTES

  return isValidType && isValidSize
}
