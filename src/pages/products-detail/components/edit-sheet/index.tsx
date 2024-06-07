import GrabSheet from '@components/grab-sheet'

import * as S from './EditSheet.styles'

const ACTION = ['수정', '삭제'] as const

function EditSheet() {
  return (
    <GrabSheet name="share-sheet">
      {ACTION.map((action, idx) => (
        <S.OrderWrapper key={action}>
          <S.Order>{action}</S.Order>
          {idx !== ACTION.length - 1 && <S.Divider />}
        </S.OrderWrapper>
      ))}
    </GrabSheet>
  )
}

export default EditSheet
