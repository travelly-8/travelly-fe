import { createSlice } from '@reduxjs/toolkit'

export interface SheetSliceState {
  sheet: {
    value: {
      status: boolean
      text: string
    }
  }
}

export const sheetSlice = createSlice({
  name: 'sheet',
  initialState: { value: { name: '', status: false, text: '' } },
  reducers: {
    sheet: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { sheet } = sheetSlice.actions
