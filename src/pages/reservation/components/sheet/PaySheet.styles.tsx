import styled from 'styled-components'

export const Title = styled.div`
  font-size: 1.8rem;
`

export const SheetItem = styled.div<{ $underline: boolean }>`
  display: flex;
  justify-content: space-between;

  width: 100%;
  ${({ $underline }) =>
    $underline &&
    `border-bottom:1px solid var(--color-gray-bright); padding-bottom: 2rem;`}
`

export const ItemKey = styled.div`
  font-size: 1.4rem;
`

export const ItemValue = styled.div<{ $primary: boolean }>`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ $primary }) =>
    $primary ? 'var(--color-main)' : 'var(--color-gray-middle)'};
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`
