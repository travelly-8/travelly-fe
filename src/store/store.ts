import { configureStore } from '@reduxjs/toolkit'

import { sheetSlice } from './sheet-slice'

const store = configureStore({
  reducer: {
    sheet: sheetSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
