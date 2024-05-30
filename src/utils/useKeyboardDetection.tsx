import { useEffect, useState } from 'react'

const useKeyboardDetection = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (!isMobile) return

    const originalHeight = window.innerHeight

    const handleResize = () => {
      if (window.innerHeight < originalHeight) {
        setIsKeyboardOpen(true)
      } else {
        setIsKeyboardOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isKeyboardOpen
}

export default useKeyboardDetection
