import { useEffect, useState } from 'react'

// True only for devices with a precise pointer (mouse/trackpad) AND enough
// viewport width to be a real desktop layout. Used to gate the custom cursor
// and the hero's mouse-parallax — both are desktop-only premium touches and
// must not run on touch devices (brief section 20 / 18).
export default function usePointerFine() {
  const [isFine, setIsFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (min-width: 768px)')
    setIsFine(mq.matches)
    const handler = (e) => setIsFine(e.matches)
    if (mq.addEventListener) mq.addEventListener('change', handler)
    else mq.addListener(handler)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler)
      else mq.removeListener(handler)
    }
  }, [])

  return isFine
}
