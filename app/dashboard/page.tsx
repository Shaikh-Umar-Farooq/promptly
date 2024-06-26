"use client"
import React, { useState } from 'react'
import Searchsection from './_components/Searchsection'
import Templatelist from './_components/Templatelist'

function Dashboard() {

  const [userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div className='bg-white rounded-2xl h-screen font-sans pb-20 '>
        <Searchsection onSearchInput={(value:string)=>setUserSearchInput(value)} />
        <Templatelist userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard