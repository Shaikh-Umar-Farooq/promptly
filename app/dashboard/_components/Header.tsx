import { Button } from '@/components/ui/button'
import {  Link2, Search } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'


function Header() {

    const {user}=useUser();
    return (
        <div className='p-7 bg-white flex  items-center justify-between font-sans'>
            <div>
            <h2 className='font-sans text-lg font-medium '> Heya! {user?.firstName} {user?.lastName}</h2>
            <h2 className='text-gray-500 text-sm'>Good to see you.</h2>

            </div>
            
            <Link href='https://www.linkedin.com/in/umar-shaikh-96b7b31a5/'>
            <Button variant={'outline'}>
                <div className='flex items-center justify-center gap-2'>
                    <Link2 size={20} />
                    <h2>connect with developer</h2>
                </div>
            </Button>

            </Link>
            

        </div>
    )
}

export default Header