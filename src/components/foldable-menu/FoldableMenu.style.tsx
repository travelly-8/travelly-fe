import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`
export const Attribute = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 0;

  border-bottom: solid 1px var(--color-gray-bright);
  font-size: 14px;
  color: var(--color-black);
`
export const Text = styled.div<{
  $selected: boolean
}>`
  color: ${({ $selected }) =>
    $selected ? 'var(--color-black)' : 'var(--color-gray-middle)'};
`
export const Icon = styled.img<{
  $selected: boolean
}>`
  width: 1rem;
  height: 0.5rem;

  filter: ${({ $selected }) => ($selected ? 'none' : 'opacity(0.5)')};
`
export const Value = styled.div`
  padding: 1rem;
`
