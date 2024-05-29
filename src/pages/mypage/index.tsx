import Dashboard from './components/dashboard'
import MypageHeader from './components/mypage-header'
import ProfileTab from './components/profile-tab'
import data from './dummyData.json'

export default function MyPage() {
  const { email, nickname, coin, imageUrl, role, reviews } = data
  return (
    <>
      <MypageHeader />
      <ProfileTab data={{ email, nickname, imageUrl }} />
      <Dashboard data={{ role, coin, reviews }} />
    </>
  )
}
