import * as S from './Chip.style'

interface IChip {
  text: string
}

const Chip = ({ text }: IChip) => {
  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}

export default Chip
