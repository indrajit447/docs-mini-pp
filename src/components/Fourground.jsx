import React, { useRef, useState } from 'react'
import Card from './Card'


const Fourground = () =>  {
  const ref=useRef(null);
  const data = [
    {
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    filesize: ".9mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download Now" ,tagColor:"green"},
  },
    {
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    filesize: ".9mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download Now" ,tagColor:"blue"},
  },
    {
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    filesize: ".9mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download Now" ,tagColor:"green"},
  },
];
  return (

    <div ref={ref} className=' fixed top-0 left-0 w-full h-full bg-sky-700/200 flex gap-10 flex-wrap z-[3] p-5'>
      {data.map((item,index)=>(
         
      <Card data={item} reference={ref} />
      ))}

    </div>
  )
}

export default Fourground
