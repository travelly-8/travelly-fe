import EditSheet from '@/pages/products-detail/components/edit-sheet'
import ReviewOrderSheet from '@/pages/products-detail/components/review-order-sheet'
import ShareSheet from '@/pages/products-detail/components/share-sheet'
import type { IShareSheetProps } from '@/pages/products-detail/components/share-sheet/ShareSheet.type'
import type { ISheetComponents } from '@/pages/products-detail/components/sheet-renderer/SheetRenderer.type'
import { SheetSliceState } from '@/store/sheet-slice.ts'

import { useSelector } from 'react-redux'

const sheetComponents: ISheetComponents = {
  'review-order-sheet': ReviewOrderSheet,
  'share-sheet': ShareSheet,
  'edit-sheet': EditSheet,
}

interface SheetRendererProps {
  shareSheetProps: IShareSheetProps
}

function SheetRenderer({ shareSheetProps }: SheetRendererProps) {
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  const SheetComponent = sheetReducer.status
    ? sheetComponents[sheetReducer.name as keyof ISheetComponents]
    : null

  const sheetProps = {
    'share-sheet': shareSheetProps,
  }

  return SheetComponent ? (
    <SheetComponent
      {...(sheetProps[sheetReducer.name as keyof typeof sheetProps] || {})}
    />
  ) : null
}

export default SheetRenderer
