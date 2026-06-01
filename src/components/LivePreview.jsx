import React from 'react'
import { motion } from 'framer-motion'
import LinkCard from './LinkCard'

export default function LivePreview({ profile, links }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="p-6 bg-white dark:bg-[#071025] rounded-lg shadow-lg border border-gray-100 dark:border-transparent"
    >
      <div className="flex flex-col items-center text-center">
        <img src={profile.image} alt="avatar" className="w-28 h-28 rounded-full object-cover mb-3 ring-2 ring-white dark:ring-gray-800" />
        <h3 className="text-xl font-bold">{profile.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">{profile.role}</p>
        <p className="mt-3 text-sm max-w-md">{profile.bio}</p>
      </div>

      <div className="mt-6 space-y-3">
        {links.length === 0 && (
          <div className="text-center text-sm text-gray-500">No links yet — add one on the left.</div>
        )}
        {links.map((l) => (
          <LinkCard key={l.id} link={l} />
        ))}
      </div>
    </motion.div>
  )
}
