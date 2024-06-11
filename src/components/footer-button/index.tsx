import * as S from './FooterButton.style'

interface IFooterButton {
  buttonText: string
  onClick: () => void
  disabled?: boolean
}

const FooterButton = ({
  buttonText,
  onClick,
  disabled = false,
}: IFooterButton) => {
  return (
    <S.Wrapper>
      <S.Button onClick={onClick} disabled={disabled}>
        {buttonText}
      </S.Button>
    </S.Wrapper>
  )
}

export default FooterButton
