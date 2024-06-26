import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import Templatecard from './Templatecard';

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

function Templatelist({ userSearchInput }: any) {

  const [Templatelist, setTemplatelist] = useState(Templates)

  useEffect(() => {
    if (userSearchInput) {
      const filterdata = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase()) ||
        item.category.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplatelist(filterdata);
    } else {
      setTemplatelist(Templates)
    }
  }, [userSearchInput])

  return (
    <div>
      {Templatelist.length === 0 ? (
        <p className="text-center text-gray-500">No search results found for {userSearchInput}.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-20'>
          {Templatelist.map((item: Template, index: number) => (
            <Templatecard key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Templatelist
