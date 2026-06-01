import React from 'react'

export default function ProfileForm({ profile, setProfile }) {
  const update = (field) => (e) =>
    setProfile({ ...profile, [field]: e.target.value })

  return (
    <div className="p-4 bg-white dark:bg-[#071025] rounded-lg shadow-sm border border-gray-100 dark:border-transparent">
      <h2 className="font-semibold mb-3">Edit Profile</h2>
      <div className="space-y-3">
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300">Profile Image URL</label>
          <input
            value={profile.image}
            onChange={update('image')}
            className="w-full mt-1 p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300">Name</label>
          <input
            value={profile.name}
            onChange={update('name')}
            className="w-full mt-1 p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300">Role</label>
          <input
            value={profile.role}
            onChange={update('role')}
            className="w-full mt-1 p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300">Bio</label>
          <textarea
            value={profile.bio}
            onChange={update('bio')}
            className="w-full mt-1 p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
            rows={4}
          />
        </div>
      </div>
    </div>
  )
}
