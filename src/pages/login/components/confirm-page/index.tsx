import { putRole } from '@/api/authAPI'
import rocket from '@/assets/login/rocket.png'
import { setRole } from '@/store/auth-slice/auth-slice'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import isAxiosError from '@/utils/isAxiosError'
import { getAccessToken, refreshAccessToken } from '@/utils/tokenStorage'

import RectangleButton from '@components/rectangle-button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'
import * as S from './ConfirmPage.style'

interface ConfirmPageProps {
  selectedRole: 'traveller' | 'travelly' | null
}

const ConfirmPage = ({ selectedRole }: ConfirmPageProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )
  const handleCreateAccount = async () => {
    if (selectedRole) {
      try {
        let token = getAccessToken()
        if (!token) {
          token = await refreshAccessToken()
        }
        await putRole(selectedRole)
        dispatch(setRole(selectedRole))
        navigate('/')
      } catch (error) {
        if (isAxiosError(error)) {
          console.error('Role update failed:', error.response?.data)
        } else {
          console.error('Role update failed:', (error as Error).message)
        }
      }
    } else {
      console.error('Role is null')
    }
  }

  return (
    <S.Wrapper>
      <S.Img src={rocket} alt="회원 유형 선택 확인" />
      <S.UpperText>{sheetReducer.text}</S.UpperText>
      <S.LowerText>회원 계정을 생성 하시겠습니까?</S.LowerText>
      <RectangleButton size="medium" onClick={handleCreateAccount}>
        계정 생성
      </RectangleButton>
      <S.BackButton
        onClick={() =>
          dispatch(sheet({ name: 'select-plan-confirm', status: false }))
        }
      >
        &lt; 다시 선택하기
      </S.BackButton>
    </S.Wrapper>
  )
}

export default ConfirmPage
