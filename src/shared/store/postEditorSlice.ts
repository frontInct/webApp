import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PostEditorState = {
  description: string
  files: File[]
  previews: string[]
  error: string | null
}

const initialState: PostEditorState = {
  description: '',
  files: [],
  previews: [],
  error: null,
}

export const postEditorSlice = createSlice({
  name: 'postEditor',
  initialState,
  reducers: {
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload
    },
    addFiles(state, action: PayloadAction<File[]>) {
      state.files.push(...action.payload)
    },
    addPreview(state, action: PayloadAction<string>) {
      state.previews.push(action.payload)
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
    clearPostEditor(state) {
      state.description = ''
      state.files = []
      state.previews = []
      state.error = null
    },
  },
})

export const {
  setDescription,
  addFiles,
  addPreview,
  setError,
  clearPostEditor,
} = postEditorSlice.actions

export const postEditorReducer = postEditorSlice.reducer
