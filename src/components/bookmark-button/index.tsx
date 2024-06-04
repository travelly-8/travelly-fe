import bookmarked from '@/assets/home/bookmark-clicked.svg'
import unbookmarked from '@/assets/home/bookmark-unclicked.svg'

import * as S from './BookmarkButton.style'
import { IBookmarkButtonProps } from './BookmarkButton.type'

function BookmarkButton({ isBookmarked, onClick }: IBookmarkButtonProps) {
  return (
    <S.Button
      src={isBookmarked ? bookmarked : unbookmarked}
      alt="찜 버튼"
      onClick={onClick}
    />
  )
}

export default BookmarkButton
