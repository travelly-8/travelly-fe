import GlobalStyles from '@/styles/GlobalStyles'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home'
import SignupPage from './pages/signup'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}
