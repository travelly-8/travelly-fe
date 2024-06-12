import { useCallback, useState } from 'react'

import { getProductDetail } from '@/api/productsAPI'
import SheetRenderer from '@/pages/products-detail/components/sheet-renderer'
import { ISheetComponents } from '@/pages/products-detail/ProductsDetail.type'
import CancellationPolicy from '@/pages/reservation/components/cancellation-policy'
import ReservationDateSection from '@/pages/reservation/components/reservation-date-section'
import ReservationInput from '@/pages/reservation/components/reservation-input'
import type { IReservationInputState } from '@/pages/reservation/components/reservation-input/Reservation.type'
import type { IPaySheet } from '@/pages/reservation/components/sheet/PaySheet.type'
import TicketCountSection from '@/pages/reservation/components/ticket-count-section'
import { IPersonnelSliceState } from '@/store/personnel-slice/personnel-slice.type'
import { sheet } from '@/store/sheet-slice/sheet-slice'

import CheckBox from '@components/check-box'
import FooterReservation from '@components/footer-reservation'
import PageHeader from '@components/page-header'
import ReviewProductCard from '@components/review-product-card'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import * as S from './ReservationPage.style'

function ReservationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IReservationInputState>()
  const onSubmit = (data: IReservationInputState) => {
    console.log(data) // 나중에 용도에 맞게 변경
  }

  const nameRegister = register('name', { required: '예약자명을 입력해주세요' })
  const phoneRegister = register('phone', {
    required: '연락처를 입력해주세요',
    pattern: {
      value: /^[0-9\b -]{7,13}$/,
      message: '올바른 연락처 형식을 입력해주세요',
    },
  })
  const emailRegister = register('email', {
    required: '이메일을 입력해주세요',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: '올바른 이메일 형식을 입력해주세요',
    },
  })

  const nameValue = watch('name')
  const phoneValue = watch('phone')
  const emailValue = watch('email')

  const isNameValid = !nameValue
  const isPhoneValid = !phoneValue || !/^[0-9\b -]{7,13}$/.test(phoneValue)
  const isEmailValid =
    !emailValue ||
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)
  const dispatch = useDispatch()
  const [isRadioChecked, setIsRadioChecked] = useState(true)
  const [isCancelPolicyChecked, setIsCancelPolicyChecked] = useState(false)

  const handleSetCancellationPolicyChecked = (isChecked: boolean) => {
    setIsCancelPolicyChecked(isChecked)
  }

  const { productId } = useParams()

  const { data: productDetail } = useQuery({
    queryKey: ['products-detail', productId],
    queryFn: ({ queryKey }) => getProductDetail(Number(queryKey[1])),
  })

  const { name, images, ticketDto } = productDetail?.data || {} // merge되면 변경
  const isError = isNameValid || isPhoneValid || isEmailValid
  const handleSheetDispatch = useCallback(
    (name: keyof ISheetComponents) => {
      dispatch(sheet({ name, status: true, text: '' }))
    },
    [dispatch, isError],
  )
  const handlePayConfirmClick = () => {
    if (!isError && isCancelPolicyChecked) {
      handleSheetDispatch('pay-confirm-sheet')
    } else {
      dispatch(sheet({ name: 'pay-confirm-sheet', status: false, text: '' }))
    }
  }

  const personnel = useSelector(
    (state: IPersonnelSliceState) => state.personnel.value,
  )

  const ticketPrice =
    ticketDto && ticketDto.length > 0
      ? ticketDto[0].price *
        (personnel.adult + personnel.teenager + personnel.infant)
      : 0 // 나중에 성인 청소년 소아 나눠지면 변경

  const handleRadioChange = () => {
    setIsRadioChecked(!isRadioChecked)
  }

  const payConfirmProps: IPaySheet = {
    userPoint: 1000,
    productPoint: 1000,
  }

  const reviewProductCardProps = {
    id: productId,
    name: name,
    images: images,
    createdDate: '24.00.00-24.00.00',
    ticketDto: ticketDto,
  }

  return (
    <>
      <PageHeader>
        <S.HeaderTitle>상품 예약하기</S.HeaderTitle>
      </PageHeader>
      <S.PageContainer>
        <S.CardWrapper>
          <ReviewProductCard
            productDetail={reviewProductCardProps}
            isCommentMode={false}
          />
        </S.CardWrapper>
        <S.CheckBoxWrapper>
          <CheckBox text="계정정보 가져오기" />
        </S.CheckBoxWrapper>
        <ReservationInput
          nameRegister={nameRegister}
          phoneRegister={phoneRegister}
          emailRegister={emailRegister}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <S.TicketInfo>
          <TicketCountSection isInput />
          <ReservationDateSection
            onCalendarClick={() => handleSheetDispatch('calendar-sheet')}
          />
        </S.TicketInfo>
        <S.PayOptions>
          <S.PayOptionHeader>결제 방법</S.PayOptionHeader>
          <S.PayOption>
            <S.Label>
              <S.Radio
                name="point"
                checked={isRadioChecked}
                onChange={handleRadioChange}
              />
              포인트 결제
            </S.Label>
            <S.PointInput
              type="text"
              data-visible={isRadioChecked}
              placeholder="프로모션 코드 입력"
            />
          </S.PayOption>
        </S.PayOptions>
        <S.PayAmount>
          <S.AllPayTitle>
            <S.AllPayText>총 결제 금액</S.AllPayText>
            <S.Vat>(VAT포함)</S.Vat>
          </S.AllPayTitle>
          <S.AllAmount>{ticketPrice} 포인트</S.AllAmount>
        </S.PayAmount>
        <CancellationPolicy
          setCancellationPolicyChecked={handleSetCancellationPolicyChecked}
        />
      </S.PageContainer>
      <FooterReservation
        isBookmarked={true}
        isReservationProduct={true}
        price={ticketPrice}
        discount={0}
        buttontype="payment"
        onPayConfirmClick={handlePayConfirmClick}
        onSubmit={handleSubmit(onSubmit)}
      />
      <SheetRenderer payConfirmProps={payConfirmProps} />
    </>
  )
}

export default ReservationPage
