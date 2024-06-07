import { createSlice } from '@reduxjs/toolkit'

export interface UserSliceState {
  user: {
    value: {
      newUser: boolean
    }
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: { newUser: false } },
  reducers: {
    user: (state, action) => {
      state.value = action.payload
    },
    reset: () => {},
  },
})

export const { user, reset } = userSlice.actions
