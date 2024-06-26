"use client"
import React, { useState } from 'react'
import Formsection from './_compontent/Formsection'
import Formoutput from './_compontent/Formoutput'
import {ChevronLeft} from 'lucide-react'
import Link from 'next/link'
import Templatelist, { Template } from '../../_components/Templatelist'
import Templates from '@/app/(data)/Templates'
import { chatSession } from '@/utils/aimodel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'

interface Props{
    params:{
        'template-slug':string
    }
    
}

function CreateNewContent(props:Props) {
    const selectedTemplate:Template|undefined=Templates?.find((item) => item.slug === props.params['template-slug'])

    const [loading, setloading] = useState(false);

    const [aioutput, setaioutput] = useState<string>('');

    const {user}=useUser();

    const generateaicontent=async(FormData:any)=>{
        setloading(true);
        const selectedprompt=selectedTemplate?.aiprompt;

        const finalprompt=selectedprompt+" "+JSON.stringify(FormData);

        const result=await chatSession.sendMessage(finalprompt);

        console.log(result.response.text());
        setaioutput(result?.response.text());

        await SaveInDb(FormData ,selectedTemplate?.slug,result?.response.text());
        setloading(false);
    }

    const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
        const result=await db.insert(AIOutput).values({
            formaData:formData,
            airesponse:aiResp,
            templateslug:slug,
            createdby:user?.primaryEmailAddress?.emailAddress??"",
            createdAt:new Date().toISOString()
        });

        console.log(result);
    }



  return (
    <div className='font-sans p-6 pt-2'>
        <Link className='flex text-gray-500 justify-start items-center' href='/dashboard/'> <ChevronLeft size={20} />  <h2> back</h2></Link>
        <div className='grid grid-cols-3'>
        <Formsection selectedTemplate={selectedTemplate}  userformInput={(v:any)=>generateaicontent(v)}
            loading={loading}
            />
            <div className='col-span-2'>
            <Formoutput aioutput={aioutput}  />
            </div>
      
        </div>
    </div>
  )
}

export default CreateNewContent