import chat from '@/assets/footer-navigation/annotation-heart.svg'
import bookmark from '@/assets/footer-navigation/bookmark.svg'
import home from '@/assets/footer-navigation/home-smile.svg'
import myPage from '@/assets/footer-navigation/my-page.svg'
import register from '@/assets/footer-navigation/package-plus.svg'

//TODO: 페이지 생성될 때마다 url 변경 필요

export const FNB_TRAVELLER = [
  { img: chat, description: '챗', url: '/' },
  { img: bookmark, description: '찜', url: '/' },
  { img: home, description: '홈', url: '/' },
  { img: myPage, description: 'my', url: '/mypage' },
] as const

export const FNB_TRAVELLY = [
  { img: chat, description: '챗', url: '/' },
  { img: bookmark, description: '찜', url: '/' },
  { img: home, description: '홈', url: '/' },
  { img: register, description: '등록', url: '/' },
  { img: myPage, description: 'my', url: '/' },
] as const
