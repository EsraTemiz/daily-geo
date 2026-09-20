import React  from 'react'
import { FaFireAlt } from "react-icons/fa";
import gununSorusu from '../data/gununSorusu.js';
import GununSorusuModal from './GununSorusuModal.jsx';
import { useState } from "react";
const GununSorusuCard = ({onClose,isModalOpen}) => {
 const {image,hints,title, description}=gununSorusu
    // !günün sorusu Modal

  return (
    <div>
         <div className="flex-1">

            <div className="bg-white rounded-3xl shadow-xl p-6">
               <span className='inline-flex items-center font-semibold text-olive-700 '><FaFireAlt className='text-mustard-500  mr-2' /> Günün Sorusu</span> 
              <div className="mt-4 h-56 bg-gray-100 rounded-xl flex items-center justify-center">
               <img src={image}/>
              </div>
              <h3 className="mt-5 text-xl text-olive-800 font-bold">
               {title}
              </h3>

              <p className="mt-3 text-gray-600">
               {description}
              </p>
              <button className="mt-5 w-full   text-white py-3 rounded-xl">
                Analizi İncele
              </button>

            </div>
          </div>
          {isModalOpen && (<GununSorusuModal title={title} hints={hints} image={image} onClose={onClose}  />)}
       
            
    </div>
  )
}

export default GununSorusuCard

