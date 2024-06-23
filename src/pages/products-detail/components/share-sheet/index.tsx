import { useEffect } from 'react'

import kakao from '@/assets/products-detail/kakao-icon.svg'
import link from '@/assets/products-detail/link-icon.svg'
import shareMessage from '@/utils/kakaoShare'

import GrabSheet from '@components/grab-sheet'

import * as S from './ShareSheet.style'

import type { IShareSheetProps } from './ShareSheet.type'

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
    window.Kakao.init(import.meta.env.VITE_APP_KAKAO_KEY)
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
              currentUrl,
              commentCount,
            )
          }
        >
          <S.KakaoIcon src={kakao} />
          <S.Share>카카오톡으로 공유하기</S.Share>
        </S.ShareWrapper>
        <S.Divider />
        <S.ShareWrapper onClick={copyUrl}>
          <S.LinkIconWrapper>
            <S.LinkIcon src={link} />
          </S.LinkIconWrapper>
          <S.Share>링크 복사하기</S.Share>
        </S.ShareWrapper>
      </S.Wrapper>
    </GrabSheet>
  )
}

export default ShareSheet
