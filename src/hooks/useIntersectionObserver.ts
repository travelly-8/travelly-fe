import { useCallback, useEffect, useRef } from 'react'

type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
) => void

const useIntersectionObserver = (onIntersect: IntersectHandler) => {
  const ref = useRef<HTMLDivElement>(null)

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry, observer)
        }
      })
    },
    [onIntersect],
  )

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(callback)
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref, callback])

  return ref
}

export default useIntersectionObserver
