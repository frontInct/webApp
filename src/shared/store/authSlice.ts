import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isLoggedIn: boolean
  email?: string
}

const initialState: AuthState = {
  isLoggedIn: false,
  email: undefined,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload
    },
    setEmail(state, action: PayloadAction<string | undefined>) {
      state.email = action.payload
    },
  },
})

export const { setIsLoggedIn, setEmail } = authSlice.actions
export const authReducer = authSlice.reducer
