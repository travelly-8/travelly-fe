export interface IBookmarkButtonProps {
  isBookmarked: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
}
