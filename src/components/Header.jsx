import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">DevLinks Pro</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">Preview updates in real-time</span>
        <ThemeToggle />
      </div>
    </header>
  )
}
