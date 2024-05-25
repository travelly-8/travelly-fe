import chat from '@/assets/footer-navigation/annotation-heart.svg'
import bookmark from '@/assets/footer-navigation/bookmark.svg'
import home from '@/assets/footer-navigation/home-smile.svg'
import myPage from '@/assets/footer-navigation/my-page.svg'

export const FNB_TRAVELER = [
  { img: chat, description: '챗', url: '/' },
  { img: bookmark, description: '찜', url: '/' },
  { img: home, description: '홈', url: '/' },
  { img: myPage, description: 'my', url: '/' },
] as const
