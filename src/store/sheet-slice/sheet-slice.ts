import { createSlice } from '@reduxjs/toolkit'

export const sheetSlice = createSlice({
  name: 'sheet',
  initialState: { value: { name: '', status: false, text: '' } },
  reducers: {
    sheet: (state, action) => {
      state.value = action.payload
    },
    reset: () => {},
  },
})

export const { sheet, reset } = sheetSlice.actions
