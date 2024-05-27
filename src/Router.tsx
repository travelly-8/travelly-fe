import GlobalStyles from '@/styles/GlobalStyles'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/login/login'
import SelectPlanPage from './pages/login/select-plan'
import SignupPage from './pages/signup'
import SignupEndPage from './pages/signup/end'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/end" element={<SignupEndPage />} />
        <Route path="/select-plan" element={<SelectPlanPage />} />
      </Routes>
    </BrowserRouter>
  )
}
