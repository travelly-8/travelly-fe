import type { ICalendarSheet } from '@/pages/reservation/components/sheet/calendar-sheet'
import type { IPaySheet } from '@/pages/reservation/components/sheet/PaySheet.type'

import { IEditSheet } from '../edit-sheet'
import type { IReviewOrderSheet } from '../review-order-sheet/ReviewOrderSheet.type'
import type { IShareSheetProps } from '../share-sheet/ShareSheet.type'

export interface ISheetRendererProps {
  shareSheetProps?: IShareSheetProps
  payConfirmProps?: IPaySheet
  payCancelProps?: IPaySheet
  calendarProps?: ICalendarSheet
  reviewOrderSheetProps?: IReviewOrderSheet
  editSheetProps?: IEditSheet
}

export interface ISheetComponents {
  'review-order-sheet': React.ComponentType<IReviewOrderSheet>
  'share-sheet': React.ComponentType<IShareSheetProps>
  'edit-sheet': React.ComponentType<IEditSheet>
  'calendar-sheet': React.ComponentType<ICalendarSheet>
  'pay-confirm-sheet': React.ComponentType<IPaySheet>
  'pay-cancel-sheet': React.ComponentType<IPaySheet>
}
