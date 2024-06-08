import EditSheet from '@/pages/products-detail/components/edit-sheet'
import ReviewOrderSheet from '@/pages/products-detail/components/review-order-sheet'
import ShareSheet from '@/pages/products-detail/components/share-sheet'
import { SheetSliceState } from '@/store/sheet-slice.ts'

import { useSelector } from 'react-redux'

import { ISheetComponents } from './SheetRenderer.type'

const sheetComponents: ISheetComponents = {
  'review-order-sheet': ReviewOrderSheet,
  'share-sheet': ShareSheet,
  'edit-sheet': EditSheet,
}

const SheetRenderer: React.FC = () => {
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  const SheetComponent = sheetReducer.status
    ? sheetComponents[sheetReducer.name as keyof ISheetComponents]
    : null

  return SheetComponent ? <SheetComponent /> : null
}

export default SheetRenderer
