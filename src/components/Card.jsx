import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({data,reference}) => {
  return (
    < motion.div drag  dragConstraints={reference}  whileDrag={{scale:1.1}} dragElastic={.1}  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className=' relative w-60 h-72 flex-shrink-0 rounded-[40px] bg-zinc-900/90 text-white py-10 px-5 overflow-hidden'>

        <FaFileLines />
        <p className=' text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className=' footer absolute w-full bottom-0  left-0'>
            <div className='flex items-center py-3 px-8  justify-between mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7  bg-zinc-600 rounded-full flex items-center justify-center'>
                  {data.close ? <IoCloseSharp/>:<LuDownload size=".7em" color='#fff'/>}
                </span>
            </div>
            {
              data.tag.isOpen &&(
                <div className={ `tag w-full py-4 ${data.tag.tagColor=== "blue" ? "bg-blue-600" : "bg-green-600"} flex item-center justify-center`}>
                <h3 className=' text-sm font-semibold'>{data.tag.tagTitle}</h3>

              </div>
              ) 
              }
          
        </div>
    </motion.div>
  );
}

export default Card
