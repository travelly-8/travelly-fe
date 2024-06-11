import { FunctionComponent } from 'react'

import type { IShareSheetProps } from '../share-sheet/ShareSheet.type'

export interface ISheetComponents {
  'review-order-sheet': React.ComponentType
  'share-sheet': FunctionComponent<IShareSheetProps>
  'edit-sheet': React.ComponentType
}

export interface SheetRendererProps {
  shareSheetProps: IShareSheetProps
}
