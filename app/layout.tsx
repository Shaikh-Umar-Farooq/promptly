"use client"
import React, { useState, useEffect } from 'react';
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ['greek'],
  display: 'swap',
  variable: '--font-inter',
});
 
const roboto_mono = Roboto_Mono({
  subsets: ['greek'],
  display: 'swap',
  variable: '--font-roboto-mono',
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <ClerkProvider>
      <html lang="en" className="font-sans">
        <body className={`${inter.variable} ${roboto_mono.variable}`}>
          {isMobileOrTablet ? (
            <div className="flex flex-col justify-center items-center h-96">
              <p className="text-center text-lg font-mono text-gray-800">Please log in using a desktop.</p>
              <p className="w-4/5 text-center text-sm font-sans text-gray-500">Mobile and tablet support coming soon! Sorry for the inconvenience.</p>
            </div>
          ) : (
            <div>{children}</div>
          )}
        </body>
      </html>
    </ClerkProvider>
  );
}
