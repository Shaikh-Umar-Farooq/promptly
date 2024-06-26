import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Page() {
  return (
    <div className='font-sans flex items-center justify-center h-screen'>
      <UserProfile 
        appearance={{
          elements: {
            card: 'shadow-none', // Removes shadow
            side: 'hidden', // Hides sidebar
            profile: 'w-full' // Ensures profile section uses full width
          },
        }} 
      />
    </div>
  )
}

export default Page
