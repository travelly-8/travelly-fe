import GrabSheet from '@components/grab-sheet'

import { deleteReview } from '@/api/reviewAPI'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as S from './EditSheet.styles'

const ACTION = ['수정', '삭제'] as const

export type IEditSheet = {
  editId: number
}

function EditSheet({ editId }: IEditSheet) {
  const { productId } = useParams<{ productId: string }>()
  const dispatch = useDispatch()

  const mutation = useMutation({
    mutationFn: (reviewId: number) => deleteReview(reviewId),
  })

  const queryClient = useQueryClient()

  const handleActionClick = (action: string) => {
    if (action === '수정') {
    }
    if (action === '삭제') {
      mutation.mutate(+editId, {
        onSuccess: () => {
          alert('리뷰가 성공적으로 삭제되었습니다!')
          queryClient.invalidateQueries({
            queryKey: ['products-detail', productId],
          })
          queryClient.invalidateQueries({
            queryKey: ['reviews', productId, 'new'],
          })
          dispatch(sheet({ name: 'edit-sheet', status: false }))
        },
      })
    }
  }

  return (
    <GrabSheet name="edit-sheet">
      {ACTION.map((action, idx) => (
        <S.OrderWrapper key={action}>
          <S.Order onClick={() => handleActionClick(action)}>{action}</S.Order>
          {idx !== ACTION.length - 1 && <S.Divider />}
        </S.OrderWrapper>
      ))}
    </GrabSheet>
  )
}

export default EditSheet
