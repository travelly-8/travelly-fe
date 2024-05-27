import { useRef } from 'react'

const useHorizontalScroll = () => {
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown =
    (ref: React.RefObject<HTMLDivElement>) =>
    (e: React.MouseEvent | React.TouchEvent) => {
      isDown.current = true
      const touchX = 'touches' in e ? e.touches[0].pageX : e.pageX
      startX.current = touchX - (ref.current?.offsetLeft || 0)
      scrollLeft.current = ref.current?.scrollLeft || 0
    }

  const handleMouseLeave = () => {
    isDown.current = false
  }

  const handleMouseUp = () => {
    isDown.current = false
  }

  const handleMouseMove =
    (ref: React.RefObject<HTMLDivElement>) =>
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDown.current || !ref.current) return
      const touchX = 'touches' in e ? e.touches[0].pageX : e.pageX
      const x = touchX - (ref.current.offsetLeft || 0)
      const walk = (x - startX.current) * 1
      requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.scrollLeft = scrollLeft.current - walk
        }
      })
    }

  return {
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  }
}

export default useHorizontalScroll
