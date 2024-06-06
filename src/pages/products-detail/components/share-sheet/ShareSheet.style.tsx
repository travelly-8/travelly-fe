import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  cursor: pointer;
`

export const ShareWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

export const KakaoIcon = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url('src/assets/products-detail/kakao-icon.svg');
`
export const LinkIcon = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  padding: 1.2rem;
  background-image: url('src/assets/products-detail/link-icon.svg');
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid var(--color-gray-light);
  border-radius: 50%;
`

export const Share = styled.p`
  padding-left: 0.3rem;
  color: var(--color-black);
  font-size: 1.4rem;
  line-height: 2.38rem;
  cursor: pointer;
`

export const Divider = styled.div`
  border-bottom: 1px solid var(--color-gray-bright);
`
