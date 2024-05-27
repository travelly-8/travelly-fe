import { useState } from 'react'

import { SheetSliceState } from '@/store/sheet-slice.ts'

import Header from '@components/header'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const Main = styled.div<{
  $isKebabClicked: boolean
  $isSheet: boolean
}>`
  display: ${({ $isSheet }) => ($isSheet ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  background-color: ${({ $isKebabClicked }) =>
    $isKebabClicked ? 'rgba(0, 0, 0, 0.50)' : 'aqua'};
  width: 100%;
  height: 1080px;
`
export default function HomePage() {
  const [isKebabClicked, setIsKebabClicked] = useState(false)
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )

  return (
    <>
      <Header kebabClick={() => setIsKebabClicked(!isKebabClicked)} />
      <Main $isKebabClicked={isKebabClicked} $isSheet={sheetReducer.status}>
        안녕
      </Main>
    </>
  )
}
