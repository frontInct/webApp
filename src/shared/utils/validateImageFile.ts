import { ALLOWED_IMAGE_TYPES, MAX_FILE_SIZE_BYTES } from "../constants/upload"

export function validateImageFile(file: File): string[] {
  const errors: string[] = []

  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    errors.push('Invalid file format. Only JPEG, PNG, and JPG are allowed')
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    errors.push('File size exceeds the 20MB limit')
  }

  return errors
}
