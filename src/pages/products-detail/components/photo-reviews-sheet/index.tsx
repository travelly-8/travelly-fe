import SheetHeader from '@components/sheet-header'

import * as S from './PhotoReviewsSheet.styles.tsx'
import { PhotoReview } from './PhotoReviewsSheet.styles.tsx'

const PhotoReviewsSheet = ({ reviewImg }: { reviewImg: string[] }) => {
  return (
    <div>
      <SheetHeader sheetName="photo-reviews-sheet">
        <S.HeaderTitle>후기 사진 모아보기</S.HeaderTitle>
      </SheetHeader>
      <S.PhotosWrapper>
        {reviewImg.map((photo, idx) => (
          <PhotoReview key={idx} src={photo} alt={`리뷰사진 ${idx}`} />
        ))}
      </S.PhotosWrapper>
    </div>
  )
}

export default PhotoReviewsSheet
