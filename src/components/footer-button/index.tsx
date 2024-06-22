import * as S from './FooterButton.style'

interface IFooterButton {
  buttonText: string
  onClick?: () => void
  disabled?: boolean
  buttonType?: 'submit' | 'button'
}

const FooterButton = ({
  buttonText,
  onClick,
  disabled = false,
  buttonType = 'button',
}: IFooterButton) => {
  return (
    <S.Wrapper>
      <S.Button onClick={onClick} disabled={disabled} type={buttonType}>
        {buttonText}
      </S.Button>
    </S.Wrapper>
  )
}

export default FooterButton
