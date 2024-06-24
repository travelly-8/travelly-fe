import EditSheet from '@/pages/products-detail/components/edit-sheet'
import ReviewOrderSheet from '@/pages/products-detail/components/review-order-sheet'
import ShareSheet from '@/pages/products-detail/components/share-sheet'
import CalendarSheet from '@/pages/reservation/components/sheet/calendar-sheet'
import PayCancelSheet from '@/pages/reservation/components/sheet/pay-cancel-sheet'
import PayConfirmSheet from '@/pages/reservation/components/sheet/pay-confirm-sheet'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'

import { useSelector } from 'react-redux'

import type {
  ISheetComponents,
  ISheetRendererProps,
} from './SheetRenderer.type'

const sheetComponents: ISheetComponents = {
  'review-order-sheet': ReviewOrderSheet,
  'share-sheet': ShareSheet,
  'edit-sheet': EditSheet,
  'calendar-sheet': CalendarSheet,
  'pay-confirm-sheet': PayConfirmSheet,
  'pay-cancel-sheet': PayCancelSheet,
}

function SheetRenderer({
  shareSheetProps,
  payConfirmProps,
  payCancelProps,
  calendarProps,
  reviewOrderSheetProps,
  editSheetProps,
}: ISheetRendererProps) {
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )
  const SheetComponent = sheetReducer.status
    ? sheetComponents[sheetReducer.name as keyof ISheetComponents]
    : null

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sheetProps: Partial<Record<keyof ISheetComponents, any>> = {
    'share-sheet': shareSheetProps,
    'pay-confirm-sheet': payConfirmProps,
    'pay-cancel-sheet': payCancelProps,
    'calendar-sheet': calendarProps,
    'review-order-sheet': reviewOrderSheetProps,
    'edit-sheet': editSheetProps,
  }

  const sheetName = sheetReducer.name as keyof ISheetComponents

  return SheetComponent ? (
    <SheetComponent {...(sheetProps[sheetName] || {})} />
  ) : null
}

export default SheetRenderer
