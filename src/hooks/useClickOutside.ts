import { RefObject, useEffect } from 'react'

const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
): void => {
  const handleClick = (e: MouseEvent | TouchEvent | PointerEvent): void => {
    if (ref.current != null && !ref.current.contains(e.target as HTMLElement)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
}

export default useClickOutside
