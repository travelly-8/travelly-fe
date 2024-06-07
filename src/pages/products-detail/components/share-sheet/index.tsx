import { useEffect } from 'react'

import shareMessage from '@/utils/kakaoShare'

import GrabSheet from '@components/grab-sheet'

import * as S from './ShareSheet.style'
import { IShareSheetProps } from './ShareSheet.type'

function ShareSheet({
  address,
  addressTitle,
  title,
  description,
  imageUrl,
  commentCount,
}: IShareSheetProps) {
  const currentUrl = window.location.href

  const copyUrl = () => {
    navigator.clipboard.writeText(currentUrl)
  }

  useEffect(() => {
    window.Kakao.cleanup()
    window.Kakao.init('e556577fbb3d6efe74faf54a15a6fde0')
    window.Kakao.isInitialized()
  }, [])

  return (
    <GrabSheet name="share-sheet">
      <S.Wrapper>
        <S.ShareWrapper
          onClick={() =>
            shareMessage(
              address,
              addressTitle,
              title,
              description,
              imageUrl,
              'https://tickets.interpark.com/',
              commentCount,
            )
          }
        >
          <S.KakaoIcon />
          <S.Share>카카오톡으로 공유하기</S.Share>
        </S.ShareWrapper>
        <S.Divider />
        <S.ShareWrapper onClick={copyUrl}>
          <S.LinkIcon />
          <S.Share>링크 복사하기</S.Share>
        </S.ShareWrapper>
      </S.Wrapper>
    </GrabSheet>
  )
}

export default ShareSheet
