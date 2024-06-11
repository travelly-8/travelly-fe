import * as S from './CancellationPolicy.style'

function CancellationPolicy() {
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
        <S.CheckBox type="checkbox" />
        <S.ConsentContent>취소 및 환불 규정에 동의합니다.</S.ConsentContent>
      </S.CheckConsent>

      <S.StyledCheckbox id="styled-checkbox-1" type="checkbox" value="value1" />
      <label htmlFor="styled-checkbox-1">Checkbox</label>
      <S.StyledCheckbox
        id="styled-checkbox-2"
        type="checkbox"
        value="value2"
        defaultChecked
      />
      <label htmlFor="styled-checkbox-2">CSS Only</label>
      <S.StyledCheckbox
        id="styled-checkbox-3"
        type="checkbox"
        value="value3"
        disabled
      />
      <label htmlFor="styled-checkbox-3">A disabled checkbox</label>
    </S.SectionWrapper>
  )
}

export default CancellationPolicy
