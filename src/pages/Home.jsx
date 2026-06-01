import React from 'react'
import Header from '../components/Header'
import ProfileForm from '../components/ProfileForm'
import SocialLinksForm from '../components/SocialLinksForm'
import LivePreview from '../components/LivePreview'
import useLocalStorage from '../hooks/useLocalStorage'

export default function Home() {
  const [profile, setProfile] = useLocalStorage('dlp_profile', {
    name: 'Manish',
    role: 'Frontend Developer',
    bio: 'I build delightful UIs.',
    image: 'https://i.pravatar.cc/150?img=3'
  })

  const [links, setLinks] = useLocalStorage('dlp_links', [
    { id: 1, type: 'GitHub', url: 'https://github.com', label: 'GitHub' }
  ])

  return (
    <div className="min-h-screen p-4 md:p-10 bg-slate-50 dark:bg-[#041026]">
      <div className="max-w-6xl mx-auto">
        <Header />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-6">
            <ProfileForm profile={profile} setProfile={setProfile} />
            <SocialLinksForm links={links} setLinks={setLinks} />
          </div>

          <div className="md:sticky md:top-20">
            <LivePreview profile={profile} links={links} />
          </div>
        </div>
      </div>
    </div>
  )
}
