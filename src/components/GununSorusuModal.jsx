import React, { useState } from 'react'
import { LiaWindowClose } from "react-icons/lia";
const GununSorusuModal = ({onClose,image,hints,title}) => {
  const [steps,setStep]=useState(0);
  return (
    <div>
      <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
         
         <div className='bg-white max-w-2xl p-8 rounded-2xl flex flex-col gap-4'>
          <h3>{title}</h3>
          <img  src={image}/>
          <p>{hints[steps]}</p>
            {steps < hints.length -1 && (<button className=" bg-purple-400 self-start rounded p-2" onClick={()=>setStep(steps+1)}>ipuçları</button> )}
         </div>
         
          <button className=' border-2 rounded ml-1 bg-olive-500 p-1' onClick={onClose}> <LiaWindowClose /></button>
      </div>
     
    </div>
  )
}

export default GununSorusuModal


