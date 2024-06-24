import filter from '@/assets/products/filter.svg'

import * as S from './AppBar.style'

import type { IAppBarProps } from './AppBar.type'

import arrowIcon from '@/assets/products/down-arrow.svg'

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
        <S.Order onClick={onOrderClick}>
          정렬 <img src={arrowIcon} alt="정렬" />
        </S.Order>
        {onFilterClick && (
          <S.Filter onClick={onFilterClick}>
            <img src={filter} alt="필터" />
          </S.Filter>
        )}
      </S.OrderFilterWrapper>
    </S.AppBar>
  </S.AppBarWrapper>
)

export default AppBar
