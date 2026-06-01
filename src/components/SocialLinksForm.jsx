import React, { useState } from 'react'

const TYPES = ['GitHub', 'LinkedIn', 'Portfolio', 'Twitter', 'LeetCode']

export default function SocialLinksForm({ links, setLinks }) {
  const [type, setType] = useState(TYPES[0])
  const [url, setUrl] = useState('')

  function addLink() {
    if (!url) return
    const id = Date.now()
    setLinks([...links, { id, type, url, label: type }])
    setUrl('')
  }

  function removeLink(id) {
    setLinks(links.filter((l) => l.id !== id))
  }

  return (
    <div className="p-4 bg-white dark:bg-[#071025] rounded-lg shadow-sm border border-gray-100 dark:border-transparent">
      <h2 className="font-semibold mb-3">Social Links</h2>
      <div className="flex gap-2 items-center">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border rounded-md bg-transparent border-gray-200 dark:border-gray-700"
        >
          {TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://..."
          className="flex-1 p-2 border rounded-md border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <button onClick={addLink} className="px-3 py-2 bg-blue-600 text-white rounded-md">+ Add</button>
      </div>

      <div className="mt-4 space-y-2">
        {links.length === 0 && <div className="text-sm text-gray-500">No links yet — add one.</div>}
        {links.map((l) => (
          <div key={l.id} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-[#041324] rounded-md">
            <div className="text-sm">{l.label || l.type}</div>
            <div className="flex items-center gap-2">
              <a href={l.url} target="_blank" rel="noreferrer" className="text-xs text-blue-600">Visit</a>
              <button onClick={() => removeLink(l.id)} className="text-xs text-red-500">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
