"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { UserButton, UserProfile } from "@clerk/clerk-react";
import Templatecard from "./dashboard/_components/Templatecard";
import Templates from '@/app/(data)/Templates'
import { useState } from "react";

export interface Template {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiprompt: string;
  form?: Form[]
}
export interface Form {
  Label: string;
  field: string;
  name: string;
  required?: boolean;
}

const getRandomSvg = () => {


  const randomNumber = Math.floor(Math.random() * 25) + 1; // Random number between 1 and 50
  return `/${randomNumber}.svg`; // Adjust the path according to your setup
}

export default function Home() {

  const [Templatelist, setTemplatelist] = useState(Templates)

  const svgSrc = getRandomSvg();
  const userButtonAppearance = {
    elements: {

      userButtonAvatarBox: "w-10 h-10", // Custom width and height
      userButtonPopoverCard: "bg-gray-600 font-sans", // Custom background for the popover card
      userButtonPopoverActionButton: " font-sans", // Custom text color for action buttons
    },
  };

  const { user } = useUser();

  return (
    <div className="font-sans m-7 mt-3">

      <div className="flex justify-between items-center ">

        <div className="flex gap-2 items-center">
          <Image src="/logoblack.svg" alt="logo" width={70} height={70} />
          <h2 className="font-mono text-xl font-bold ">Promptly</h2>
        </div>
        <div>
          {user ?
            <div className="flex gap-4 items-center ">
              <Link href="/dashboard" >
                <Button variant={'outline'} >
                  Go to Dashboard
                </Button>
              </Link>
              <UserButton appearance={userButtonAppearance} />
            </div>
            :
            <Link href="dashboard" >
              <Button >
                Sign In
              </Button>
            </Link>
          }
        </div>




      </div>

      <div className="flex  mt-10  items-center justify-between ">
        <div className="flex w-[60%] gap-2 flex-col justify-start  ">
          <h2 className="font-mono font-bold text-6xl gap leading-tight ">Unlock Your Academic and Professional Potential with AI</h2>
          <p className=" text-gray-600 text-xl">Welcome to our AI-powered platform, designed to support university students and job seekers in achieving their goals. Whether you need help with academic tasks or job applications, our intelligent tools are here to assist you every step of the way.</p>
          <Link href="/dashboard" className="mt-5 w-96 " >
            <Button className="w-96 h-14">
              {user ? "Go to Dashboard" : "Get Started"}
            </Button>
          </Link>
        </div>
        <div className="mr-10">
          <Image src="/hero.svg" alt="hero" width={500} height={500} />
        </div>

      </div>
      <div>

        <div className="text-center m-24 flex flex-col gap-3 mb-16">
          <h2 className="font-mono text-3xl font-semibold ">
            Explore Our Comprehensive AI Tools
          </h2>

          <p className="text-gray-700 text-lg">Our platform offers a wide range of AI tools tailored to meet your academic and professional needs. Discover how we can help you succeed
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-20'>
          {Templatelist.map((item: Template, index: number) => (
            <Templatecard key={index} {...item} />

          ))}


        </div>


      </div>

      <div className="m-10 font-mono font-bold text-center flex justify-center">
        <h2>made with 🖤 by Umar Shaikh. </h2>
      </div>
    </div>

  );
}