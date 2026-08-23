import { useCallback, useEffect, useState } from 'react'

// Ported 1:1 in behaviour from the original main.js theme toggle, just
// reshaped as a hook. The <head> inline script in index.html already sets
// the class before paint, so this only needs to sync React state to it.
export default function useTheme() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : true
  )

  const setTheme = useCallback((mode) => {
    const dark = mode === 'dark'
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('vikiy-theme', dark ? 'dark' : 'light')
    } catch (e) {
      /* storage unavailable — theme just won't persist */
    }
    setIsDark(dark)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark')
  }, [isDark, setTheme])

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  return { isDark, toggleTheme }
}
