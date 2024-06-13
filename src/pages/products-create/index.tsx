import ArrowRight from '@/assets/common/arrow-right-lightgray.svg'
import CameraImg from '@/assets/common/camera.svg'

import FooterButton from '@components/footer-button'
import FooterNavigation from '@components/footer-navigation'
import Input from '@components/input'
import PageHeader from '@components/page-header'

import * as S from './ProductsCreatePage.style'

export default function ProductCreatePage() {
  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>판매 상품 등록</S.Title>
        </S.Content>
      </PageHeader>
      <S.InputWrapper>
        <Input inputType="companyName" />
        <Input inputType="productName" />
        <Input inputType="price" />
        <Input inputType="contact" />
        <Input inputType="homepageUrl" />
      </S.InputWrapper>
      <S.AddressWrapper>
        <S.SectionTitle>주소 입력</S.SectionTitle>
        <button>
          <p>주소 검색</p>
          <img src={ArrowRight} alt="클릭" />
        </button>
      </S.AddressWrapper>
      <S.DatePhotoWrapper>
        <S.SectionTitle>판매 날짜</S.SectionTitle>
        <button>날짜 선택</button>
      </S.DatePhotoWrapper>
      <S.DatePhotoWrapper>
        <S.SectionTitle>메인 사진 등록</S.SectionTitle>
        <button>
          <img src={CameraImg} alt="사진 등록" />
          파일 추가하기
        </button>
      </S.DatePhotoWrapper>
      <S.DescriptionWrapper>
        <S.SectionTitle>상세 사진 및 설명 추가</S.SectionTitle>
        <S.CameraWrapper>
          <S.CameraImg
            src={CameraImg}
            alt="사진 등록"
            // onClick={handleCameraClick}
          />
          <input
            type="file"
            multiple
            // onChange={handleImageChange}
            style={{ display: 'none' }}
            // ref={fileInputRef}
          />
          {/* <S.PhotoNum>{numOfPhotos}/3</S.PhotoNum> */}
        </S.CameraWrapper>
        <S.CommentWrapper>
          <S.Textarea
            placeholder="설명 입력하기."
            // onChange={(e) => {
            //   setContent(e.target.value)
            //   setNumOfText(e.target.value.length)
            // }}
          />
        </S.CommentWrapper>
      </S.DescriptionWrapper>
      <S.FooterWrapper>
        <FooterButton
          buttonText="상품 등록"
          onClick={() => {}}
          disabled={true}
        />
        <FooterNavigation />
      </S.FooterWrapper>
    </S.Wrapper>
  )
}
