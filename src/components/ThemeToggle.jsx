import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dlp_theme')) || false
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    localStorage.setItem('dlp_theme', JSON.stringify(dark))
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800"
    >
      {dark ? 'Dark' : 'Light'}
    </button>
  )
}
