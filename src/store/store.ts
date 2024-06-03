import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { sheetSlice } from './sheet-slice'

const reducers = combineReducers({
  sheet: sheetSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sheet'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
