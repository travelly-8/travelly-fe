import { createSlice } from '@reduxjs/toolkit'

export interface ModalSliceState {
  modal: {
    value: {
      status: boolean
      text: string
    }
  }
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: { value: { name: '', status: false, text: '' } },
  reducers: {
    modal: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { modal } = modalSlice.actions
