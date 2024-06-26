import { currentUser } from '@clerk/nextjs/server';
import React from 'react';
import CopyButton from './_component/CopyButton';
import { Template } from '../_components/Templatelist';
import Templates from '@/app/(data)/Templates';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';

export interface HISTORY {
  id: Number;
  formaData: string;
  airesponse: string |null;
  templateslug: string;
  createdby: string;
  createdAt: string;
}

async function History() {
  const user = await currentUser();

  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdby, user?.primaryEmailAddress?.emailAddress ?? ''));

  const GetTemplateName = (slug: string) => {
    const template: Template | any = Templates?.find((item) => item.slug == slug);
    return template;
  };

  return (
    <div className="m-5 p-5 font-sans bg-white">
      <h2 className="font-bold text-3xl font-mono">History</h2>
      <p className="text-gray-500">Search your previously generated AI content</p>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3 rounded-md border-2">
        <h2 className="col-span-2">TEMPLATE </h2>
        <h2 className="col-span-2">AI RESPONSE</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>
      {HistoryList.map((item: HISTORY, index: number) => (
        <>
          <div className="grid grid-cols-7 my-5 py-3 px-3">
            <h2 className="col-span-2 flex gap-2 items-center font-semibold ">
              {GetTemplateName(item.templateslug)?.name}
            </h2>
            <h2 className="col-span-2 line-clamp-2 mr-6">{item?.airesponse}</h2>
            <h2>{new Date(item.createdAt).toLocaleDateString()}</h2>
            <h2>{item?.airesponse?.length??'0'}</h2>
            <h2>
              <CopyButton aiResponse={item?.airesponse??'NULL'} />
            </h2>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}

export default History;
