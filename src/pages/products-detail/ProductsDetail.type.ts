import { IPaySheet } from '@/pages/reservation/components/sheet/PaySheet.type'

import { IShareSheetProps } from './components/share-sheet/ShareSheet.type'

export interface ISheetComponents {
  'review-order-sheet': React.ComponentType
  'share-sheet': React.ComponentType<IShareSheetProps>
  'edit-sheet': React.ComponentType
  'calendar-sheet': React.ComponentType
  'pay-confirm-sheet': React.ComponentType<IPaySheet>
  'pay-cancel-sheet': React.ComponentType<IPaySheet>
}

export interface IImagesType {}
