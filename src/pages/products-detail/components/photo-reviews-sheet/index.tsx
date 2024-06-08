import { mockData3 } from '@/pages/products-detail/mockData.ts'

import SheetHeader from '@components/sheet-header'

import * as S from './PhotoReviewsSheet.styles.tsx'
import { PhotoReview } from './PhotoReviewsSheet.styles.tsx'

const PhotoReviewsSheet = () => {
  return (
    <div>
      <SheetHeader sheetName="photo-reviews-sheet">
        <S.HeaderTitle>후기 사진 모아보기</S.HeaderTitle>
      </SheetHeader>
      <S.PhotosWrapper>
        {mockData3.map((photo, idx) => (
          <PhotoReview key={idx} src={photo} />
        ))}
      </S.PhotosWrapper>
    </div>
  )
}

export default PhotoReviewsSheet
