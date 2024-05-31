import { RefObject } from 'react'

import useHorizontalScroll from './useHorizontalScroll'

const useScrollHandlers = (ref: RefObject<HTMLDivElement>) => {
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useHorizontalScroll()

  return {
    onMouseDown: handleMouseDown(ref),
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove(ref),
    onTouchStart: handleMouseDown(ref),
    onTouchEnd: handleMouseUp,
    onTouchMove: handleMouseMove(ref),
  }
}

export default useScrollHandlers
