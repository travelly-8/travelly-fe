import GlobalStyles from '@/styles/GlobalStyles.tsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home'
import SearchPage from './pages/search'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/result" element={<div>result page</div>} /> // 임시페이지
      </Routes>
    </BrowserRouter>
  )
}
