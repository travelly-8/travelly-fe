import { useEffect, useState } from 'react'

import { postProduct } from '@/api/productsAPI'
import ArrowRight from '@/assets/common/arrow-right-lightgray.svg'
import CameraImg from '@/assets/common/camera.svg'
import refreshIcon from '@/assets/home/refresh.svg'
import { REVERSED_LOCALE_CODE_LIST } from '@/constants/FILTERING_BROWSING'
import { ISheetSliceState, sheet } from '@/store/sheet-slice/sheet-slice'
import { IPostProduct } from '@/types/postProductData.type'

import Postcode from '@actbase/react-daum-postcode'
import { OnCompleteParams } from '@actbase/react-daum-postcode/lib/types'
import BottomSheet from '@components/bottom-sheet'
import CalendarInput from '@components/calendar-input'
import FooterButton from '@components/footer-button'
import FooterNavigation from '@components/footer-navigation'
import Input from '@components/input'
import { StyledInput, StyledInputWrapper } from '@components/input/Input.style'
import PageHeader from '@components/page-header'
import RoundButton from '@components/round-button'
import SheetHeader from '@components/sheet-header'
import { format, formatDate } from 'date-fns'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { IProductCreateForm } from './ProductsCreate.type'
import * as S from './ProductsCreatePage.style'

export default function ProductCreatePage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<IProductCreateForm>({
    mode: 'onChange',
  })
  const {
    control: dateControl,
    reset: dateReset,
    handleSubmit: dateHandleSubmit,
  } = useForm()

  const [isDisabled, setIsDisabled] = useState(true)
  const [selectedLocale, setSelectedLocale] = useState('0')

  const companyName = watch('companyName')
  const productName = watch('productName')
  const price = watch('price')
  const contact = watch('contact')
  const homepageUrl = watch('homepageUrl')
  const [date, setDate] = useState<Date[] | null>(null)
  const [description, setDescription] = useState<string | null>(null)

  const handleDate = (data: FieldValues) => {
    setDate(data.date)
    dispatch(sheet({ name: 'date', status: false }))
  }

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
  // 사진 업로드
  const [photo, setPhoto] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>()
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setPhoto(file)

      // TODO: /products/upload API 연결
      // const formData = new FormData()
      // formData.append('file', file)
      // postProductImage([formData])
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((err) => console.error(err))

      const previewUrl = URL.createObjectURL(file)
      setPreview(previewUrl)
    }
  }

  // 주소
  const [addressData, setAddressData] = useState<OnCompleteParams | null>(null)
  const [detailAddressData, setDetailAddressData] = useState<string | null>(
    null,
  )

  // 제출
  const onSubmit = async (data: IProductCreateForm) => {
    if (
      !preview ||
      !date ||
      !addressData?.roadAddress ||
      !description ||
      !detailAddressData
    )
      return

    const postData: IPostProduct = {
      name: data.productName,
      companyName: data.companyName,
      type: '10', // TODO: 디자인 누락
      description: description,
      images: [
        {
          url: preview, // TODO: /products/upload API 연결하고 그 res값으로 교체
          order: 0,
        },
      ],
      address: addressData?.roadAddress,
      detailAddress: detailAddressData,
      phoneNumber: data.contact,
      homepage: data.homepageUrl,
      cityCode:
        REVERSED_LOCALE_CODE_LIST[addressData?.roadAddress?.split(' ')[0]],
      quantity: 100, // TODO: 디자인 누락
      tickets: [
        // TODO: 디자인 누락
        {
          name: '성인',
          price: 10000,
        },
      ],
      operationDays: [
        {
          date: formatDate(date[0], 'yyyy-MM-dd'),
          operationDayHours: [
            {
              startTime: '12:00',
              endTime: '12:00',
            },
          ],
        },
        {
          date: formatDate(date[1], 'yyyy-MM-dd'),
          operationDayHours: [
            {
              startTime: '12:00',
              endTime: '12:00',
            },
          ],
        },
      ],
    }

    postProduct(postData)
      .then(() => {
        navigate('/mypage/my-product-list')
      })
      .catch((err) => console.error(err))
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
          {addressData && (
            <S.AddressInputWrapper>
              <S.RoadAddress>{addressData.roadAddress}</S.RoadAddress>
              <StyledInputWrapper>
                <StyledInput
                  type="text"
                  placeholder="상세 주소 입력"
                  onChange={(e) => setDetailAddressData(e.target.value)}
                />
              </StyledInputWrapper>
            </S.AddressInputWrapper>
          )}
          <button
            type="button"
            onClick={() => dispatch(sheet({ name: 'address', status: true }))}
          >
            <p>{addressData ? '주소 변경하기' : '주소 검색'}</p>
            <img src={ArrowRight} alt="클릭" />
          </button>
        </S.AddressWrapper>
        <S.DateWrapper>
          <S.SectionTitle>판매 날짜</S.SectionTitle>
          <button
            type="button"
            onClick={() => dispatch(sheet({ name: 'date', status: true }))}
          >
            {date
              ? `${format(date[0], 'yy.MM.dd')}-${format(date[1], 'yy.MM.dd')}`
              : '날짜 선택'}
          </button>
        </S.DateWrapper>
        <S.PhotoWrapper>
          <S.TitleButtonWrapper>
            <S.SectionTitle>메인 사진 등록</S.SectionTitle>
            <S.FileButton type="button">
              <img src={CameraImg} alt="사진 등록" />
              {photo ? '파일 수정하기' : '파일 추가하기'}
              <S.FileInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </S.FileButton>
          </S.TitleButtonWrapper>
          {photo && <S.PreviewImg src={preview} alt="미리보기" />}
        </S.PhotoWrapper>
        <S.DescriptionWrapper>
          <S.SectionTitle>설명 추가</S.SectionTitle>
          <S.CommentWrapper>
            <S.Textarea
              placeholder="설명 입력하기."
              onChange={(e) => setDescription(e.target.value)}
            />
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
      {sheetReducer.name === 'address' && sheetReducer.status === true && (
        <S.AddressSheet>
          <SheetHeader sheetName="address" />
          <Postcode
            style={{ width: '100%', height: '100vh' }}
            onSelected={(data) => {
              setAddressData(data)
              dispatch(sheet({ name: 'address', status: false }))
            }}
            onError={(err) => console.error(err)}
          />
        </S.AddressSheet>
      )}
      {sheetReducer.name === 'date' && sheetReducer.status === true && (
        <BottomSheet
          onClick={() => dispatch(sheet({ name: 'date', status: false }))}
        >
          <CalendarInput
            formLabel="date"
            control={dateControl}
            calendarType="rangeDate"
          />
          <S.Buttons>
            <S.RefreshButton
              onClick={() => {
                dateReset()
                setDate(null)
              }}
            >
              <S.Icon src={refreshIcon} /> 초기화
            </S.RefreshButton>
            <RoundButton.Primary onClick={dateHandleSubmit(handleDate)}>
              날짜 선택
            </RoundButton.Primary>
          </S.Buttons>
        </BottomSheet>
      )}
    </S.Wrapper>
  )
}
