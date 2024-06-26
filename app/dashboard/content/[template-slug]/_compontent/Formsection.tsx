"use client"
import { Template } from '@/app/dashboard/_components/Templatelist'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon } from 'lucide-react'

import React, { useState } from 'react'

interface Props {
    selectedTemplate?: Template;
    userformInput:any,
    loading:boolean

}

function Formsection({ selectedTemplate,userformInput,loading }: Props) {

    const [formdata, setformdata] = useState<any>();

    const handleinputchange=(event:any)=>{

        const {name,value}=event.target;
        setformdata({...formdata,[name]:value})
    }

    const onSubmit = (e:any) => {
        e.preventDefault();
        userformInput(formdata)
    }

    return (
        <div className='mt-5 w-[95%] mb-16 ' >
            <div>
                <h2 className='font-mono text-2xl font-black text-primary '>
                    {selectedTemplate?.name}
                </h2>
                <h2 className='font-sans text-gray-500 mt-2'>
                    {selectedTemplate?.desc}
                </h2>
            </div>

            <form className='mt-6 flex flex-col gap-5' onSubmit={onSubmit} action="">
                {selectedTemplate?.form?.map((item, index) => (
                    <div  >
                        <label className='text-gray-700 font-mono' >
                            {item.Label}
                        </label>
                        {item.field == 'input' ?
                            <Input name={item.name} required={item?.required} 
                            onChange={handleinputchange}
                            /> :
                            item.field == 'textarea' ?
                                <Textarea name={item.name} required={item?.required} 
                                onChange={handleinputchange}
                                 /> : null}
                    </div>

                ))}
                <h2 className='font-mono text-xs  text-gray-400 '>
                By clicking on generate you agree to Google gemini's terms and conditions.
            </h2>
            <Button type='submit' className=' w-full font-sans text-lg h-14 bg-primary' 
            disabled={loading}
            >
                {loading ? <Loader2Icon size={24} className=' animate-spin ' />  : 'Generate Content'}
                </Button>
            </form>
            

        </div>
    )
}

export default Formsection