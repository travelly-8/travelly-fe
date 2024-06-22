import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Content = styled.div`
  margin-left: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
`

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`

export const ImgWrapper = styled.div`
  position: relative;
  cursor: pointer;
`

export const ProfileImg = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
`

export const PenImg = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  bottom: 0.8rem;
  left: 2.8rem;
`

export const NicknameWrapper = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.8rem;
`
export const Nickname = styled.span`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.38rem; /* 170% */
`
export const Edit = styled.span`
  color: var(--color-main);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8rem; /* 180% */
  cursor: pointer;
`

export const Email = styled.span`
  margin-top: 0.4rem;
  color: var(--color-black);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem; /* 150% */
`
export const FooterWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 360px;
  }
`

export const MenuWrapper = styled.div`
  margin-top: 5.6rem;
  margin: 5.6rem 2rem 0 2rem;
`
interface IMenu {
  idx: number
}

export const Menu = styled.div<IMenu>`
  width: 100%;
  border-bottom: ${(props) =>
    props.idx === 1 ? '0' : '0.1rem solid var(--color-gray-light)'};
  border-top: ${(props) =>
    props.idx >= 1 ? '0.1rem solid var(--color-gray-light)' : '0'};
`
export const ExitWrapper = styled.div`
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
`
export const ExitText = styled.span`
  color: var(--color-gray-middle);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.38rem; /* 170% */
`
export const ExitIcon = styled.img`
  width: 1.0844rem;
  height: 1.4rem;
`

interface ISheet {
  idx: number
}
export const SheetTextWraeppr = styled.div<ISheet>`
  display: flex;
  padding: 1.2rem 0.25rem;
  border-top: ${(props) =>
    props.idx > 1 ? '0.1rem solid var(--color-gray-light)' : '0'};
  width: 100%;
  cursor: pointer;
  position: relative;
`
export const SheetText = styled.span`
  color: var(--colro-black);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.38rem; /* 170% */
  white-space: nowrap;
`

export const FileInput = styled.input`
  position: absolute;
  left: 0;
  z-index: 2;
  color: transparent;
  cursor: pointer;
  &::file-selector-button {
    display: none;
    background-color: yellow;
  }
`

export const BlurSheetWrapper = styled.div`
  border-bottom: 0.2rem solid var(--color-white);
  padding: 0.8rem;
`
export const NewNicknameInput = styled.input`
  background-color: transparent;
  border: none;
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.38rem; /* 170% */
  &::placeholder {
    color: var(--color-white);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.38rem; /* 170% */
  }
  &:focus {
    outline: none;
  }
`
export const EmptyBlock = styled.div`
  display: flex;
  width: 1rem;
  height: 1rem;
`
