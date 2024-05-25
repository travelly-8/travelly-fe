import GlobalStyles from '@/styles/GlobalStyles'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home'
import SelectPlanPage from './pages/login/select-plan'
import SearchPage from './pages/search'
import SignupPage from './pages/signup'
import SignupEndPage from './pages/signup/end'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/result" element={<div>result page</div>} /> // 임시페이지
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/end" element={<SignupEndPage />} />
        <Route path="/select-plan" element={<SelectPlanPage />} />
      </Routes>
    </BrowserRouter>
  )
}
