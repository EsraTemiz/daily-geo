import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LiaWindowClose } from "react-icons/lia";
import SoruAnalizi from './SoruAnalizi';
const GununSorusuModal = ({onClose,image,hints,title,solutionImage,topic}) => {
  return (
    <div>
      <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
         
         <div className='bg-white max-w-4xl p-8 rounded-2xl flex flex-col gap-2'>
         
            <SoruAnalizi  title={title} image={image} solutionImage={solutionImage} hints={hints} topic={topic}  />
             <Link to={`/lise/${topic}`} className="mt-5">
                Analizi İncele
              </Link>
         </div>
           
          <button className=' border-2 rounded ml-1 bg-olive-500 p-1' onClick={onClose}> <LiaWindowClose /></button>
      </div>
     
    </div>
  )
}

export default GununSorusuModal


