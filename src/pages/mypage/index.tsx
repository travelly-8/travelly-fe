import Dashboard from './components/dashboard'
import MypageHeader from './components/mypage-header'
import ProfileTab from './components/profile-tab'

export default function MyPage() {
  return (
    <>
      <MypageHeader />
      <ProfileTab />
      <Dashboard />
    </>
  )
}
