import React from 'react'

import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import App from './App.tsx'
import store from './store/store.ts'

import Layout from '@components/layout/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>,
)
