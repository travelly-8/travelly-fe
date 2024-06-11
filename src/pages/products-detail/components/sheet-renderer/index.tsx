import EditSheet from '@/pages/products-detail/components/edit-sheet'
import ReviewOrderSheet from '@/pages/products-detail/components/review-order-sheet'
import ShareSheet from '@/pages/products-detail/components/share-sheet'
import type {
  ISheetComponents,
  ISheetRendererProps,
} from '@/pages/products-detail/components/sheet-renderer/SheetRenderer.type'
import CalendarSheet from '@/pages/reservation/components/sheet/calendar-sheet'
import PayConfirmSheet from '@/pages/reservation/components/sheet/pay-confirm-sheet'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'

import { useSelector } from 'react-redux'

const sheetComponents: ISheetComponents = {
  'review-order-sheet': ReviewOrderSheet,
  'share-sheet': ShareSheet,
  'edit-sheet': EditSheet,
  'calendar-sheet': CalendarSheet,
  'pay-confirm-sheet': PayConfirmSheet,
}

function SheetRenderer({ shareSheetProps }: ISheetRendererProps) {
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
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
