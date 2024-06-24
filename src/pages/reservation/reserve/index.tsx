import { useCallback, useEffect, useState } from 'react'

import { getMemberProfile } from '@/api/myAPI'
import useGetMemberProfile from '@/hooks/api/memberAPI/useGetMemberProfile'
import SheetRenderer from '@/pages/products-detail/components/sheet-renderer'
import { ISheetComponents } from '@/pages/products-detail/ProductsDetail.type'
import CancellationPolicy from '@/pages/reservation/components/cancellation-policy'
import ReservationDateSection from '@/pages/reservation/components/reservation-date-section'
import ReservationInput from '@/pages/reservation/components/reservation-input'
import type { IReservationInputState } from '@/pages/reservation/components/reservation-input/Reservation.type'
import TicketCountSection from '@/pages/reservation/components/ticket-count-section'
import { IPersonnelSliceState } from '@/store/personnel-slice/personnel-slice.type'
import { reservation } from '@/store/reservation-slice/reservation-slice'
import { sheet } from '@/store/sheet-slice/sheet-slice'

import CheckBox from '@components/check-box'
import FooterReservation from '@components/footer-reservation'
import PageHeader from '@components/page-header'
import ReviewProductCard from '@components/review-product-card'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import * as S from './ReservationPage.style'

interface ITicketDto {
  id: number
  name: string
  price: number
  description: string
}
interface IPostTicketDto {
  ticketId: number
  quantity: number
}
interface IReservationData {
  productId: number
  name: string
  phone: string | undefined
  email: string
  ticketDtos: IPostTicketDto[]
  date: string
  ticketPrice: number
}

function ReservationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    reset,
  } = useForm<IReservationInputState>()

  const onSubmit = () => {
    dispatch(reservation(reservationInfo))
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
  const dateValue = watch('date')?.toString() || new Date().toString()

  const isNameValid = !nameValue
  const isPhoneValid = !phoneValue || !/^[0-9\b -]{7,13}$/.test(phoneValue)
  const isEmailValid =
    !emailValue ||
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)

  const dispatch = useDispatch()
  const [isRadioChecked, setIsRadioChecked] = useState(true)
  const [isCancelPolicyChecked, setIsCancelPolicyChecked] = useState(false)
  const [isGetAccountChecked, setIsGetAccountChecked] = useState(false)
  const [userInfo, setUserInfo] = useState<IReservationInputState>()
  const [calendarCnt, setCalendarCnt] = useState<number>(0)
  const [promotionCode, setPromotionCode] = useState<string>('')
  const [reservationInfo, setReservationInfo] = useState<IReservationData>()
  const handleSetGetAccountChecked = (isChecked: boolean) => {
    setIsGetAccountChecked(isChecked)
  }

  const handleCalendarClick = () => {
    setCalendarCnt(calendarCnt + 1)
  }

  const { data: memberProfile } = useGetMemberProfile(
    'member-profile',
    getMemberProfile,
  )
  useEffect(() => {
    setUserInfo({
      name: memberProfile?.nickname || '',
      email: memberProfile?.email || '',
    })
  }, [memberProfile])

  const handleSetCancellationPolicyChecked = (isChecked: boolean) => {
    setIsCancelPolicyChecked(isChecked)
  }

  const handlePromotionCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPromotionCode(e.target.value)
  }

  const location = useLocation()
  const { productDetail } = location.state || {}

  const { productId } = useParams()

  const { ticketDto, operationDays } = productDetail || {} // merge되면 변경

  const isError = isNameValid || isPhoneValid || isEmailValid

  const handleSheetDispatch = useCallback(
    (name: keyof ISheetComponents) => {
      dispatch(sheet({ name, status: true, text: '' }))
    },
    [dispatch],
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
    ticketDto && personnel
      ? ticketDto.reduce((totalPrice: number, ticket: ITicketDto) => {
          const personnelCount = personnel[ticket.name]
          if (personnelCount) {
            return totalPrice + ticket.price * personnelCount
          }
          return totalPrice
        }, 0)
      : 0

  const handleRadioChange = () => {
    setIsRadioChecked(!isRadioChecked)
  }

  const calendarProps = {
    control: control,
    reset: reset,
    operationDays: operationDays,
  }

  const len = operationDays ? operationDays.length : 1

  const currentTime = new Date()
  const currentYear = currentTime.getFullYear()
  const currentDay = currentTime.getDate()
  const currentMonth = currentTime.getMonth() + 1

  useEffect(() => {
    const ticketDtos = Object.keys(personnel).map((key) => {
      const matchedTicket = ticketDto?.find(
        (ticket: ITicketDto) => ticket.name === key,
      )
      return {
        ticketId: matchedTicket?.id,
        quantity: personnel[key],
      }
    })

    setReservationInfo({
      productId: Number(productId),
      name: nameValue,
      phone: phoneValue,
      email: emailValue,
      ticketDtos: ticketDtos,
      date: format(dateValue, 'yyyy-MM-dd'),
      ticketPrice: ticketPrice,
    })
  }, [
    nameValue,
    phoneValue,
    emailValue,
    personnel,
    dateValue,
    productId,
    ticketDto,
    ticketPrice,
  ])

  return (
    <>
      <PageHeader>
        <S.HeaderTitle>상품 예약하기</S.HeaderTitle>
      </PageHeader>
      <S.PageContainer>
        <S.CardWrapper>
          <ReviewProductCard
            productDetail={productDetail}
            isCommentMode={false}
          />
        </S.CardWrapper>
        <S.CheckBoxWrapper>
          <CheckBox
            text="계정정보 가져오기"
            onChange={handleSetGetAccountChecked}
          />
        </S.CheckBoxWrapper>
        <ReservationInput
          nameRegister={nameRegister}
          phoneRegister={phoneRegister}
          emailRegister={emailRegister}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          defaultValues={isGetAccountChecked ? userInfo : undefined}
        />
        <S.TicketInfo>
          <TicketCountSection ticketDto={ticketDto} isInput />
          <S.Wrapper onClick={handleCalendarClick}>
            <ReservationDateSection
              onCalendarClick={() => handleSheetDispatch('calendar-sheet')}
              value={dateValue}
            />
            {calendarCnt === 0 && <S.Error>예약할 날짜를 선택해주세요</S.Error>}
          </S.Wrapper>
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
              onChange={handlePromotionCodeChange}
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
        buttontype="payment"
        cancelPolicyChecked={isCancelPolicyChecked}
        personnelInfoChecked={ticketPrice !== 0}
        calendarChecked={calendarCnt !== 0}
        onPayConfirmClick={handlePayConfirmClick}
        onSubmit={handleSubmit(onSubmit)}
      />
      <SheetRenderer calendarProps={calendarProps} />
    </>
  )
}

export default ReservationPage
