import useKakaoMap from '@/hooks/useKakaoMap'

import * as S from './BasicInfo.style'

import type { IBasicInfoProps } from './BasicInfo.type'

const BasicInfo: React.FC<IBasicInfoProps> = ({
  address,
  detailAddress,
  companyName,
  phoneNumber,
  website,
}) => {
  const mapRef = useKakaoMap({ address, detailAddress })

  return (
    <S.BasicInfoContainer>
      <S.MapContainer>
        <S.LabelL>기본 정보</S.LabelL>
        <S.Map ref={mapRef} />
      </S.MapContainer>
      <S.DescriptionWrapper>
        <S.Description>
          <S.LabelM>주소</S.LabelM>
          <S.GrayText>
            {`${address}.`} {detailAddress}
          </S.GrayText>
        </S.Description>
        <S.Description>
          <S.LabelM>업체명</S.LabelM>
          <S.GrayText>{companyName}</S.GrayText>
        </S.Description>
        <S.Description>
          <S.LabelM>전화</S.LabelM>
          <S.GrayText>{phoneNumber}</S.GrayText>
        </S.Description>
        <S.Description>
          <S.LabelM>홈페이지</S.LabelM>
          <S.GrayATag href={website}>{website}</S.GrayATag>
        </S.Description>
      </S.DescriptionWrapper>
    </S.BasicInfoContainer>
  )
}
export default BasicInfo
