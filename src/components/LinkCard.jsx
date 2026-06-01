import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaGlobe, FaTwitter, FaCode } from 'react-icons/fa'

function IconFor(type) {
  switch (type) {
    case 'GitHub':
      return <FaGithub />
    case 'LinkedIn':
      return <FaLinkedin />
    case 'Portfolio':
      return <FaGlobe />
    case 'Twitter':
      return <FaTwitter />
    case 'LeetCode':
      return <FaCode />
    default:
      return <FaGlobe />
  }
}

export default function LinkCard({ link }) {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex items-center gap-4 p-3 rounded-md bg-gray-100 dark:bg-[#042033] border border-transparent hover:shadow-md"
    >
      <div className="text-xl text-gray-700 dark:text-gray-200">{IconFor(link.type)}</div>
      <div className="flex-1 text-left">
        <div className="font-medium">{link.label || link.type}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{link.url}</div>
      </div>
      <div className="text-sm text-blue-600">Open</div>
    </motion.a>
  )
}
