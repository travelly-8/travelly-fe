export interface IBubbleInfo {
  title: string
  text: JSX.Element
  icon: string
  bubbleIcon: string
  bubbleDirection: 'left' | 'right'
}

export interface IBubbleMap extends Record<string, IBubbleInfo> {}
