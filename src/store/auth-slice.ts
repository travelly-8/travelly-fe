import type { UserRoleType } from '@/types/userRole.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  nickname: string
  role: UserRoleType
}

const initialState: AuthState = {
  nickname: '',
  role: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        nickname: string
        role: UserRoleType
      }>,
    ) => {
      state.nickname = action.payload.nickname
      state.role = action.payload.role
    },
    setRole: (state, action: PayloadAction<'traveller' | 'travelly'>) => {
      state.role = action.payload
    },
    clearUser: (state) => {
      state.nickname = ''
      state.role = null
    },
  },
})

export const { setUser, setRole, clearUser } = authSlice.actions
export default authSlice.reducer
