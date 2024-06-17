import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => ({
  value: {},
})

export const personnelSlice = createSlice({
  name: 'personnel',
  initialState: getInitialState(),
  reducers: {
    personnel: (state, action) => {
      state.value = action.payload
    },
    reset: () => getInitialState(),
  },
})

export const { personnel, reset } = personnelSlice.actions
export default personnelSlice.reducer
