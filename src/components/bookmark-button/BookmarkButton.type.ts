export interface IBookmarkButtonProps {
  isBookmarked: boolean
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  position: 'absolute' | 'static'
}
