import 'github-markdown-css/github-markdown.css';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Props {
    aioutput: string;
}

function Formoutput({ aioutput }: Props) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(aioutput).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    return (
        <div className='w-[90%] ml-20 h-full'>
            <style jsx>{`
                .markdown-body {
                    background-color: #262626e0;
                    padding: 20px;
                    color: white;
                    min-height: 450px;
                    border-radius: 8px;
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                }
            `}</style>
            <div className='flex font-mono justify-between items-center p-2 pt-0 mt-3 mb-1'>
                <h2 className='font-mono text-xl font-bold'>AI Generated Response</h2>
                <Button variant={'outline'} onClick={handleCopy}>
                    {copied ? <><Check size={14} />&nbsp;Copied</> : <><Copy size={14} />&nbsp;Copy</>}
                </Button>
            </div>
            <div className='markdown-body'>
                <ReactMarkdown>
                    {aioutput?.length > 0 ? aioutput : 'No content generated yet'}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default Formoutput;
