import * as S from './FooterButton.style'

interface IFooterButton {
  buttonText: string
}

const FooterButton = ({ buttonText }: IFooterButton) => {
  return (
    <S.Wrapper>
      <S.Button>{buttonText}</S.Button>
    </S.Wrapper>
  )
}

export default FooterButton
