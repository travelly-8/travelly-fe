import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IProductDetail, IProductState } from './product-slice.type'

const initialState: IProductState = {
  detail: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductDetail(state, action: PayloadAction<IProductDetail>) {
      state.detail = action.payload
    },
    clearProductDetail(state) {
      state.detail = null
    },
  },
})

export const { setProductDetail, clearProductDetail } = productSlice.actions
export default productSlice.reducer
