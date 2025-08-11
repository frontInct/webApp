import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

type FileWithId = {
  id: string
  file: File
  preview: string | null
  errors?: string[]
}

type PostEditorState = {
  description: string
  files: FileWithId[]
  error: string | null
}

const initialState: PostEditorState = {
  description: '',
  files: [],
  error: null,
}

export const postEditorSlice = createSlice({
  name: 'postEditor',
  initialState,
  reducers: {
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload
    },
    addFile: {
      prepare(file: File, preview: string | null, errors?: string[]) {
        return {
          payload: {
            id: nanoid(),
            file,
            preview,
            errors,
          },
        }
      },
      reducer(state, action: PayloadAction<FileWithId>) {
        state.files.push(action.payload)
      },
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
    removeFile(state, action: PayloadAction<string>) {
      state.files = state.files.filter(f => f.id !== action.payload)
    },
    clearPostEditor(state) {
      state.description = ''
      state.files = []
      state.error = null
    },
  },
})

export const { setDescription, addFile, setError, clearPostEditor, removeFile } =
  postEditorSlice.actions

export const postEditorReducer = postEditorSlice.reducer
