import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from './baseApi'
import { authReducer } from './authSlice'
import { postEditorReducer } from './postEditorSlice'
import { postApi } from './postApi'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    auth: authReducer,
    postEditor: postEditorReducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      // Игнорировать File и preview (dataURL) в postEditor.files
      ignoredPaths: ['postEditor.files'],
      ignoredActions: ['postEditor/addFile'],
    },
  }).concat(baseApi.middleware, postApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)
