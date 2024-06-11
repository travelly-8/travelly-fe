import bookmarked from '@/assets/home/bookmark-clicked.svg'
import unbookmarked from '@/assets/home/bookmark-unclicked.svg'

import * as S from './BookmarkButton.style'
import { IBookmarkButtonProps } from './BookmarkButton.type'

function BookmarkButton({
  isBookmarked,
  onClick,
  position,
}: IBookmarkButtonProps) {
  return (
    <S.ButtonWrapper onClick={onClick}>
      <S.Button
        src={isBookmarked ? bookmarked : unbookmarked}
        alt="찜 버튼"
        position={position}
      />
    </S.ButtonWrapper>
  )
}

export default BookmarkButton
