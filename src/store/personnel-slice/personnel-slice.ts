import { createSlice } from '@reduxjs/toolkit'

export const personnelSlice = createSlice({
  name: 'personnel',
  initialState: { value: { adult: 0, teenager: 0, infant: 0 } },
  reducers: {
    personnel: (state, action) => {
      state.value = action.payload
    },
    reset: () => {},
  },
})

export const { personnel, reset } = personnelSlice.actions
export default personnelSlice.reducer
