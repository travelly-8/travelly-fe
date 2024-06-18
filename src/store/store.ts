import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './auth-slice/auth-slice'
import commentReducer from './comment-slice/comment-slice'
import personnelReducer from './personnel-slice/personnel-slice'
import productReducer from './product-slice/product-slice'
import reservationReducer from './reservation-slice/reservation-slice'
import { sheetSlice } from './sheet-slice/sheet-slice'

const rootReducer = combineReducers({
  auth: authReducer,
  sheet: sheetSlice.reducer,
  product: productReducer,
  comment: commentReducer,
  personnel: personnelReducer,
  reservation: reservationReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'sheet', 'product', 'personnel', 'reservation'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store
