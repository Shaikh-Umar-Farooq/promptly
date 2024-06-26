import { Button } from '@/components/ui/button'
import { Search, Sparkles, Star } from 'lucide-react'
import React from 'react'

function Searchsection({onSearchInput}:any) {
  return (
    <div>
    <div className='p-10 flex flex-col items-center justify-center gap-4'>
    <Button variant={'outline'}>
                <div className='flex items-center justify-center gap-2'>
                    <Sparkles size={20} />
                    <h2>powered by Gemini</h2>
                </div>
            </Button>
        <h2 className='font-black font-mono text-5xl text-primary'>Browse All Tools</h2>
        <h2 className='text-center font-sans text-sm w-2/3 text-gray-500 '>Explore our wide range of AI-powered tools designed to assist university students with their studies, job applications, networking, and more. Each tool is tailored to help you excel in your academic and professional journey.</h2>
    
        <div className='flex gap-2 mt-2 items-center p-2 border rounded-md font-sans w-[50%]'>
    <Search size={24} />
    <input type="text" placeholder='search...' 
    onChange={(event)=>onSearchInput(event.target.value)}
    className='outline-none ' />
</div>
    </div>
    
</div>
    
  )
}

export default Searchsection