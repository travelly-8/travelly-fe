import * as S from './CheckBox.style'

interface ICheckBoxProps {
  text: string
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (isChecked: boolean) => void
}

function CheckBox({
  text,
  defaultChecked = false,
  disabled = false,
  onChange,
}: ICheckBoxProps) {
  return (
    <S.Label>
      <S.StyledCheckbox
        type="checkbox"
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <S.Text>{text}</S.Text>
    </S.Label>
  )
}

export default CheckBox
