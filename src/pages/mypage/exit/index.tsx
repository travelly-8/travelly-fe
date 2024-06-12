import { useEffect } from 'react'

import airplaneImg from '@/assets/login/airplane.png'
import ExitVerificationPage from '@/pages/mypage/exit-verification'
import { reset, sheet } from '@/store/sheet-slice/sheet-slice'
import { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'

import PageHeader from '@components/page-header'
import RectangleButton from '@components/rectangle-button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './ExitPage.style'

// eslint-disable-next-line import/order

export default function ExitPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )

  //TODO: customHook으로 분리
  const controlSheet = (sheetType: string, status: boolean) => {
    dispatch(sheet({ name: sheetType, status: status, text: sheetType }))
    return
  }

  useEffect(() => {
    dispatch(reset())
  }, [])

  if (sheetReducer.status === true && sheetReducer.text === 'verify') {
    return <ExitVerificationPage />
  } else {
    return (
      <S.Wrapper>
        <PageHeader>
          <S.Title>회원 탈퇴</S.Title>
        </PageHeader>
        <S.Content>
          <S.Airplane src={airplaneImg} alt="비행기" />
          <S.UpperText>탈퇴시 복구가 불가능 합니다.</S.UpperText>
          <S.LowerText>정말 탈퇴하시겠습니까?</S.LowerText>
          <RectangleButton>
            <S.ButtonText onClick={() => navigate(-1)}>돌아가기</S.ButtonText>
          </RectangleButton>
          <S.ExitButton
            onClick={() => {
              controlSheet('verify', true)
            }}
          >
            탈퇴하기 &gt;
          </S.ExitButton>
        </S.Content>
      </S.Wrapper>
    )
  }
}
