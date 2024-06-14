import CheckBox from '@components/check-box'

import * as S from './CancellationPolicy.style'

interface ICancellationPolicyProps {
  setCancellationPolicyChecked?: (isChecked: boolean) => void
}

function CancellationPolicy({
  setCancellationPolicyChecked,
}: ICancellationPolicyProps) {
  return (
    <S.SectionWrapper>
      <S.PolicyHeader>취소 및 환불 규정 확인하기</S.PolicyHeader>
      <S.Policy>
        <S.FirstPolicy>
          배송 및 반품, 교환은 포함되지 않는 온라인 서비스입니다.
        </S.FirstPolicy>
        <S.SecondPolicy>예약 기간이 0일 전까지 취소 가능합니다.</S.SecondPolicy>
      </S.Policy>
      <S.CheckConsent>
        <CheckBox
          text="취소 및 환불 규정에 동의합니다."
          onChange={setCancellationPolicyChecked}
        />
      </S.CheckConsent>
    </S.SectionWrapper>
  )
}

export default CancellationPolicy
