"use client"
import React, { useState, useEffect } from 'react'
import Sidenav from './_components/Sidenav';
import Header from './_components/Header';

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 768); // 768px is the breakpoint for tablets
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobileOrTablet ? (
        <div className="flex flex-col justify-center items-center h-96  ">

          <p className="text-center text-lg font-mono text-gray-800">Please log in using a desktop.</p>
          <p className=" w-4/5 text-center text-sm font-sans text-gray-500">Mobile and tablet support coming soon! sorry for the inconvenience. </p>

        </div>
      ) : (
        <div className='font-sans'>
          <div className='md:w-64 hidden md:block fixed'>
            <Sidenav />
          </div>
          <div className='md:ml-64'>
            <div>
              <Header />
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default Layout
