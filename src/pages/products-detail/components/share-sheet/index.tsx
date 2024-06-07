import GrabSheet from '@components/grab-sheet'

import * as S from './ShareSheet.style'

function ShareSheet() {
  return (
    <GrabSheet name="share-sheet">
      <S.Wrapper>
        <S.ShareWrapper>
          <S.KakaoIcon />
          <S.Share>카카오톡으로 공유하기</S.Share>
        </S.ShareWrapper>
        <S.Divider />
        <S.ShareWrapper>
          <S.LinkIcon />
          <S.Share>링크 복사하기</S.Share>
        </S.ShareWrapper>
      </S.Wrapper>
    </GrabSheet>
  )
}

export default ShareSheet
