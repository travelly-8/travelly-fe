import GlobalStyles from '@/styles/GlobalStyles'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BrowsingPage from './pages/browsing'
import HomePage from './pages/home'
import SelectPlanPage from './pages/login/select-plan'
import SignupPage from './pages/signup'
import SignupEndPage from './pages/signup/end'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<div>result page</div>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/end" element={<SignupEndPage />} />
        <Route path="/select-plan" element={<SelectPlanPage />} />
        <Route path="/browsing" element={<BrowsingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
