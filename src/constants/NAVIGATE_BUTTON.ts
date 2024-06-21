import chat from '@/assets/footer-navigation/annotation-heart.svg'
import bookmark from '@/assets/footer-navigation/bookmark.svg'
import home from '@/assets/footer-navigation/home-smile.svg'
import myPage from '@/assets/footer-navigation/my-page.svg'
import register from '@/assets/footer-navigation/package-plus.svg'

export interface IMenu {
  img: string
  description: string
  url: string
}

//TODO: 페이지 생성될 때마다 url 변경 필요

export const FNB_TRAVELLER: IMenu[] = [
  { img: chat, description: '챗', url: '/chat' },
  { img: bookmark, description: '찜', url: '/bookmark' },
  { img: home, description: '홈', url: '/' },
  { img: myPage, description: 'my', url: '/mypage' },
]

export const FNB_TRAVELLY: IMenu[] = [
  { img: chat, description: '챗', url: '/chat' },
  { img: home, description: '홈', url: '/' },
  { img: register, description: '등록', url: '/products/create' },
  { img: myPage, description: 'my', url: '/mypage' },
]

export const FNB_GUEST: IMenu[] = [
  { img: chat, description: '챗', url: '/signup/start' },
  { img: bookmark, description: '찜', url: '/signup/start' },
  { img: home, description: '홈', url: '/' },
  { img: myPage, description: 'my', url: '/signup/start' },
]
