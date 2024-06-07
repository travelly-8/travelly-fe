import * as S from '@/styles/authStyles'

import BackBar from '@components/back-bar'
import RectangleButton from '@components/rectangle-button'

import { IFormContainerProps } from './FormContainer.type'

const FormContainer = ({
  isKeyboardOpen,
  title,
  onSubmit,
  allInputsFilled,
  children,
  buttonText,
}: IFormContainerProps) => {
  return (
    <>
      <BackBar />
      <S.Container $isKeyboardOpen={isKeyboardOpen}>
        <S.Title>{title}</S.Title>
        <form onSubmit={onSubmit}>
          <S.InputContainer>{children}</S.InputContainer>
          <S.ButtonContainer>
            <RectangleButton
              type="submit"
              color={allInputsFilled ? 'primary' : 'disabled'}
              size="large"
              disabled={!allInputsFilled}
            >
              {buttonText}
            </RectangleButton>
          </S.ButtonContainer>
        </form>
      </S.Container>
    </>
  )
}

export default FormContainer
