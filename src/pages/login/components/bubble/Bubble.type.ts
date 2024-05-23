export interface IBubbleInfo {
  title: string
  text: JSX.Element
  icon: string
  bubbleDirection: 'left' | 'right'
}

export interface IBubbleMap extends Record<string, IBubbleInfo> {}
