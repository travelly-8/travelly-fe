import { ICalendarSheet } from '@/pages/reservation/components/sheet/calendar-sheet'
import { IPaySheet } from '@/pages/reservation/components/sheet/PaySheet.type'

import type { IShareSheetProps } from '../share-sheet/ShareSheet.type'

export interface ISheetRendererProps {
  shareSheetProps?: IShareSheetProps
  payConfirmProps?: IPaySheet
  payCancelProps?: IPaySheet
  calendarProps?: ICalendarSheet
}

export interface ISheetComponents {
  'review-order-sheet': React.ComponentType
  'share-sheet': React.ComponentType<IShareSheetProps>
  'edit-sheet': React.ComponentType
  'calendar-sheet': React.ComponentType<ICalendarSheet>
  'pay-confirm-sheet': React.ComponentType<IPaySheet>
  'pay-cancel-sheet': React.ComponentType<IPaySheet>
}
