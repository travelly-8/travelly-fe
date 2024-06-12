import * as S from './CheckBox.style'

interface ICheckBoxProps {
  text: string
  defaultChecked?: boolean
  disabled?: boolean
}

function CheckBox({
  text,
  defaultChecked = false,
  disabled = false,
}: ICheckBoxProps) {
  return (
    <S.Label>
      <S.StyledCheckbox
        type="checkbox"
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      <S.Text>{text}</S.Text>
    </S.Label>
  )
}

export default CheckBox
