"use client";
import { Button } from '@/components/ui/button';
import { Check, Copy, Link } from 'lucide-react';
import React, { useState } from 'react';

function CopyButton({ aiResponse }: { aiResponse: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiResponse).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div>
      <h2 className="text-primary" onClick={handleCopy}>
        {copied ? <Button variant={'outline'}>
                    <Check size={14} />&nbsp;
                    Copied
                </Button> :<Button variant={'outline'}>
                    <Copy size={14} />&nbsp;
                    Copy
                </Button>}
      </h2>
 

    </div>
  )
}

export default CopyButton