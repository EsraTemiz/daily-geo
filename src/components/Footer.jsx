import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {

  return (
<div>
    <div className='relative '>
  <div className=' fixed flex  items-center shadow-md  bg-olive-700 w-full h-7 bottom-0 '> 
      <div className= 'container flex items-center justify-evenly '>
      <IoLogoInstagram className='m-2 size-5 text-olive-800 hover:text-olive-300' />
      <div className='w-1 h-7 border-0 bg-olive-800'></div>
      <FaPhoneSquareAlt className='m-2 size-5 text-olive-800  hover:text-olive-300' />
      <div className='w-1 h-7 border-0 bg-olive-800'></div>
      <MdOutlineMail className='m-2 size-6 text-olive-800  hover:text-olive-300' />
      </div>
   
  </div>
  
</div>
</div>
  )
}

export default Footer

