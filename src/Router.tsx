import ReservedDetailPage from '@/pages/reservation/reserved-detail'
import GlobalStyles from '@/styles/GlobalStyles'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AuthCallback from './pages/auth'
import BookmarkPage from './pages/bookmark'
import ChatPage from './pages/chat'
import Error404Page from './pages/error/Error404Page'
import Error500Page from './pages/error/Error500Page'
import HomePage from './pages/home'
import LoginPage from './pages/login/login'
import SelectPlanPage from './pages/login/select-plan'
import MyPage from './pages/mypage'
import MyPageEditPage from './pages/mypage/edit'
import ExitPage from './pages/mypage/exit'
import GoodbyePage from './pages/mypage/good-bye'
import MyProductListPage from './pages/mypage/my-product-list'
import NotiPage from './pages/noti'
import ProductsPage from './pages/products'
import ProductCreatePage from './pages/products-create'
import ProductsDetail from './pages/products-detail'
import Recovery from './pages/recovery'
import ReservationPage from './pages/reservation/reserve'
import ReservedListPage from './pages/reservation/reserved-list'
import ReviewDetailPage from './pages/review/detail'
import ReviewList from './pages/review/list'
import ReviewWritePage from './pages/review/write'
import SignupStartPage from './pages/signup'
import SignupEndPage from './pages/signup/end'
import SignupPage from './pages/signup/signup'
import SelectPlanRouter from './router/SelectPlanRouter'
import SplashRouter from './router/SplashRouter'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        {/* 홈 */}
        <Route element={<SplashRouter />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        {/* 상품 */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductsDetail />} />
        <Route path="/products/create" element={<ProductCreatePage />} />
        {/* 로그인, 회원가입 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/start" element={<SignupStartPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/end" element={<SignupEndPage />} />
        <Route element={<SelectPlanRouter />}>
          <Route path="/select-plan" element={<SelectPlanPage />} />
        </Route>
        <Route path="/find" element={<Recovery />} />
        <Route path="/auth/callback/:platform" element={<AuthCallback />} />
        {/* 마이페이지 */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<MyPageEditPage />} />
        <Route path="/mypage/my-product-list" element={<MyProductListPage />} />
        <Route path="/exit" element={<ExitPage />} />
        <Route path="/goodbye" element={<GoodbyePage />} />
        <Route path="/notification" element={<NotiPage />} />
        {/* 리뷰 */}
        <Route path="/review/write" element={<ReviewWritePage />} />
        <Route
          path="/review/:productId/:reviewId"
          element={<ReviewDetailPage />}
        />
        <Route path="/review/list" element={<ReviewList />} />
        {/* 예약 */}
        <Route path="/reservation/:productId" element={<ReservationPage />} />
        <Route
          path="/reservation-detail/:reservationId"
          element={<ReservedDetailPage />}
        />
        <Route path="/reservation-list" element={<ReservedListPage />} />
        {/* 에러 */}
        <Route path="*" element={<Error404Page />} />
        <Route path="/server-error" element={<Error500Page />} />
        {/* 찜, 커뮤니티 대체 페이지 */}
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
    </BrowserRouter>
  )
}
