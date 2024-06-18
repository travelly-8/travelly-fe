import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => ({
  value: {},
})

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: getInitialState(),
  reducers: {
    reservation: (state, action) => {
      state.value = action.payload
    },
    reset: () => getInitialState(),
  },
})

export const { reservation, reset } = reservationSlice.actions
export default reservationSlice.reducer
