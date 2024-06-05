import { getSearchProducts } from '@/api/productsAPI'
import { API_PRODUCTS } from '@/constants/API'
import useGetAllProducts from '@/hooks/api/productsAPI/useGetAllProducts'
import useProductCardsParams from '@/hooks/api/productsAPI/useProductCardsParams'
import { sheet, SheetSliceState } from '@/store/sheet-slice'
import { useDispatch, useSelector } from 'react-redux'
import EditSheet from './components/edit-sheet'
import Footer from './components/footer'
import RecommendCard from './components/recommend-card'

const Result = () => {
  // 이후 지워서 사용
  const mockCard = [
    {
      id: 1,
      imageUrl:
        'https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004',
      name: '테스트',
      cityCode: '1',
      address: '서울시 강남구',
      discount: 10,
      ticketDto: [{ name: 'djfm', price: 1000, description: 'string' }],
      rating: 4.5,
      reviewCount: 100,
    },
  ]

  const cardsQueryData = useProductCardsParams()
  const { data } = useGetAllProducts(API_PRODUCTS.PRODUCTS, () =>
    getSearchProducts(cardsQueryData),
  )
  const cards = data?.content ?? mockCard

  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )

  return (
    <div>
      'result page'
      <button
        onClick={() => dispatch(sheet({ name: 'edit-sheet', status: true }))}
      >
        open edit sheet
      </button>
      <RecommendCard cards={cards} />
      {sheetReducer.status && sheetReducer.name === 'edit-sheet' && (
        <EditSheet />
      )}
      {/* 이후 api에서 받아오는 데이터에 따라 isBookmarked에 넣어주세요 */}
      <Footer
        isBookmarked={true}
        isReservationProduct={true}
        discount={20}
        price={20000}
      />
    </div>
  )
}

export default Result
