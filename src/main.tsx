import React from 'react'

import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App.tsx'
import store from './store/store.ts'

import Layout from '@components/layout/index.tsx'

export const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <App />
        </Layout>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
