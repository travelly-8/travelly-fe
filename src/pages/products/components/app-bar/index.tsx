import * as S from './AppBar.style'
import { IAppBarProps } from './AppBar.type'

const AppBar = ({
  totalElements,
  onOrderClick,
  onFilterClick,
}: IAppBarProps) => (
  <S.AppBarWrapper>
    <S.AppBar>
      <S.ProductInfo>
        <S.ProductType>상품</S.ProductType>
        <S.ProductCount>({totalElements}개)</S.ProductCount>
      </S.ProductInfo>
      <S.OrderFilterWrapper>
        <S.Order onClick={onOrderClick}>정렬</S.Order>
        <S.Filter onClick={onFilterClick}>
          <img src="/src/assets/products/filter.svg" alt="필터" />
        </S.Filter>
      </S.OrderFilterWrapper>
    </S.AppBar>
  </S.AppBarWrapper>
)

export default AppBar
