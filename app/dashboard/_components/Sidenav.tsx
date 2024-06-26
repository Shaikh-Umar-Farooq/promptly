"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

import Link from 'next/link'

function Sidenav() {

    const MenuList =[
        {
            name:'Home',
            icon: Home ,
            link:'/dashboard'
        },
        {
            name:'History',
            icon: FileClock ,
            link:'/dashboard/history'
        },
        {
            name:'Settings',
            icon: Settings ,
            link:'/dashboard/settings'
        }
        ,
    ]
   
    
    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])


    return (
        <div className='h-screen p-5 bg-[#f6f5f270]  font-sans border-r-2'>

            <div className='flex gap-3 justify-start  items-center pb-6 '>
                <Image src='/logoblack.svg' width={50} height={50} alt='logo' />
                <h2 className='font-mono text-3xl font-bold'>Promptly</h2>


            </div>
            <div className='mt-6'>
                
                {MenuList.map((menu, index) => (
                    <Link  href={menu.link}>
                    <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer ${path==menu.link&&'bg-primary text-white'}`}>
                        <menu.icon size={24} />
                        <span>{menu.name} </span>
                       
                    </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Sidenav