import GlobalStyles from '@/styles/GlobalStyles'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AuthCallback from './pages/auth'
import HomePage from './pages/home'
import LoginPage from './pages/login/login'
import SelectPlanPage from './pages/login/select-plan'
import MyPage from './pages/mypage'
import MyPageEditPage from './pages/mypage/edit'
import ExitPage from './pages/mypage/exit'
import GoodbyePage from './pages/mypage/good-bye'
import ProductsPage from './pages/products'
import SignupStartPage from './pages/signup'
import SignupEndPage from './pages/signup/end'
import SignupPage from './pages/signup/signup'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/start" element={<SignupStartPage />} />
        {/* <Route path="/search" element={<SearchPage />} /> */}
        <Route path="/result" element={<div>result page</div>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/end" element={<SignupEndPage />} />
        <Route path="/select-plan" element={<SelectPlanPage />} />
        {/* <Route path="/browsing" element={<BrowsingPage />} /> */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<MyPageEditPage />} />
        <Route path="/exit" element={<ExitPage />} />
        <Route path="/goodbye" element={<GoodbyePage />} />
        <Route path="/auth/callback/:platform" element={<AuthCallback />} />
      </Routes>
    </BrowserRouter>
  )
}
