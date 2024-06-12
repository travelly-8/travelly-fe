import { createSlice } from '@reduxjs/toolkit'

export const commentSlice = createSlice({
  name: 'comment',
  initialState: { value: { parentId: 0 } },
  reducers: {
    comment: (state, action) => {
      state.value = action.payload
    },
    reset: () => {},
  },
})

export const { comment, reset } = commentSlice.actions
export default commentSlice.reducer
