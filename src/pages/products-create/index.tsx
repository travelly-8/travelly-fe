import { useEffect, useState } from 'react'

import ArrowRight from '@/assets/common/arrow-right-lightgray.svg'
import CameraImg from '@/assets/common/camera.svg'

import FooterButton from '@components/footer-button'
import FooterNavigation from '@components/footer-navigation'
import Input from '@components/input'
import PageHeader from '@components/page-header'
import { Controller, useForm } from 'react-hook-form'

import { IProductCreateForm } from './ProductsCreate.type'
import * as S from './ProductsCreatePage.style'

export default function ProductCreatePage() {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<IProductCreateForm>({
    mode: 'onChange',
  })

  const [isDisabled, setIsDisabled] = useState(true)

  const companyName = watch('companyName')
  const productName = watch('productName')
  const price = watch('price')
  const contact = watch('contact')
  const homepageUrl = watch('homepageUrl')

  // 에러 처리
  useEffect(() => {
    if (companyName && productName && price && contact && homepageUrl) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [companyName, productName, price, contact, homepageUrl])

  const [companyNameError, setCompanyNameError] = useState<string | undefined>(
    undefined,
  )
  const [productNameError, setProductNameError] = useState<string | undefined>(
    undefined,
  )
  const [priceError, setPriceError] = useState<string | undefined>(undefined)
  const [contactError, setContactError] = useState<string | undefined>(
    undefined,
  )
  const [homepageUrlError, setHomepageUrlError] = useState<string | undefined>(
    undefined,
  )
  const [addressError, setAddressError] = useState<string | undefined>(
    undefined,
  )

  const [dateError, setDateError] = useState<string | undefined>(undefined)

  const [photoError, setPhotoError] = useState<string | undefined>(undefined)

  const [description, sestDescriptionError] = useState<string | undefined>(
    undefined,
  )

  // 사진 업로드
  const [photo, setPhoto] = useState<File>()
  const [preview, setPreview] = useState<string>()
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setPhoto(file)

      const reader = new FileReader()
      setPreview(String(reader.readAsDataURL(file)))
    }
  }

  // 제출
  const onSubmit = async (data: IProductCreateForm) => {
    console.log(data, photo)
  }

  return (
    <S.Wrapper>
      <PageHeader>
        <S.Content>
          <S.Title>판매 상품 등록</S.Title>
        </S.Content>
      </PageHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <Controller
            name="companyName"
            control={control}
            defaultValue=""
            rules={{ required: '업체명을 입력해주세요.' }}
            render={({ field }) => (
              <Input
                {...field}
                inputType="companyName"
                placeholder="companyName"
                errorType={
                  companyNameError ||
                  (errors.companyName ? errors.companyName.message : undefined)
                }
                onChange={(e) => {
                  setCompanyNameError(undefined)
                  field.onChange(e)
                  setValue('companyName', e.target.value, {
                    shouldValidate: false,
                  })
                }}
              />
            )}
          />
          <Controller
            name="productName"
            control={control}
            defaultValue=""
            rules={{ required: '상품명을 입력해주세요.' }}
            render={({ field }) => (
              <Input
                {...field}
                inputType="productName"
                placeholder="productName"
                errorType={
                  productNameError ||
                  (errors.productName ? errors.productName.message : undefined)
                }
                onChange={(e) => {
                  setProductNameError(undefined)
                  field.onChange(e)
                  setValue('productName', e.target.value, {
                    shouldValidate: false,
                  })
                }}
              />
            )}
          />
          <Controller
            name="price"
            control={control}
            defaultValue=""
            rules={{ required: '가격을 입력해주세요.' }}
            render={({ field }) => (
              <Input
                {...field}
                inputType="price"
                placeholder="price"
                errorType={
                  priceError ||
                  (errors.price ? errors.price.message : undefined)
                }
                onChange={(e) => {
                  setPriceError(undefined)
                  field.onChange(e)
                  setValue('price', e.target.value, {
                    shouldValidate: false,
                  })
                }}
              />
            )}
          />
          <Controller
            name="contact"
            control={control}
            defaultValue=""
            rules={{ required: '연락처 정보를 입력해주세요.' }}
            render={({ field }) => (
              <Input
                {...field}
                inputType="contact"
                placeholder="contact"
                errorType={
                  contactError ||
                  (errors.contact ? errors.contact.message : undefined)
                }
                onChange={(e) => {
                  setContactError(undefined)
                  field.onChange(e)
                  setValue('contact', e.target.value, {
                    shouldValidate: false,
                  })
                }}
              />
            )}
          />
          <Controller
            name="homepageUrl"
            control={control}
            defaultValue=""
            rules={{ required: 'url을 입력해주세요.' }}
            render={({ field }) => (
              <Input
                {...field}
                inputType="homepageUrl"
                placeholder="homepageUrl"
                errorType={
                  homepageUrlError ||
                  (errors.homepageUrl ? errors.homepageUrl.message : undefined)
                }
                onChange={(e) => {
                  setHomepageUrlError(undefined)
                  field.onChange(e)
                  setValue('homepageUrl', e.target.value, {
                    shouldValidate: false,
                  })
                }}
              />
            )}
          />
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
          {/* TODO: 사진 있으면 '파일 수정하기'로 워딩 및 스타일 변경 */}
          <S.FileButton>
            <img src={CameraImg} alt="사진 등록" />
            파일 추가하기
            <S.FileInput
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </S.FileButton>
          {/* TODO: 디자인에 맞춰서 재배치 */}
          {photo && <img src={preview} alt="미리보기" />}
        </S.DatePhotoWrapper>
        <S.DescriptionWrapper>
          <S.SectionTitle>설명 추가</S.SectionTitle>
          <S.CommentWrapper>
            <S.Textarea placeholder="설명 입력하기." />
          </S.CommentWrapper>
        </S.DescriptionWrapper>
        <S.FooterWrapper>
          <FooterButton
            buttonText="상품 등록"
            disabled={isDisabled}
            buttonType="submit"
          />
          <FooterNavigation />
        </S.FooterWrapper>
      </form>
    </S.Wrapper>
  )
}
