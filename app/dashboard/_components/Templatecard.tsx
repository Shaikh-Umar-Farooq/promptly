import React from 'react'
import { Template } from './Templatelist'

import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Function to get a random SVG filename
const getRandomSvg = () => {


  const randomNumber = Math.floor(Math.random() * 25) + 1; // Random number between 1 and 50
  return `/${randomNumber}.svg`; // Adjust the path according to your setup
}

function Templatecard(item: Template) {

  const svgSrc = getRandomSvg();

  return (
    <Link href={`/dashboard/content/${item.slug}`}>
      <div className=' m-4 h-80 rounded-xl flex flex-col justify-center gap-3 cursor-pointer border-2 hover:shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 duration-300'>

        <div className='p-10   flex flex-col justify-center gap-3'>

          <img src={svgSrc} alt="icon" className='w-24 h-24 mx-auto mb-4' />

          <h2 className='font-mono text-xl font-extrabold text-left'>{item.name}</h2>
          <p className='text-sm text-gray-500'>{item.desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default Templatecard
