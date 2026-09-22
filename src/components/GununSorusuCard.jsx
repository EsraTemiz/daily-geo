import React  from 'react'
import { FaFireAlt } from "react-icons/fa";
import gununSoruları from '../data/gununSorusu.js';
import GununSorusuModal from './GununSorusuModal.jsx';
import { useState} from "react";

const GununSorusuCard = ({onClose,isModalOpen}) => {
const bugun= new Date();
const yil = bugun.getFullYear();
const ay = String(bugun.getMonth() + 1).padStart(2, "0");
const gun = String(bugun.getDate()).padStart(2, "0");

const bugununTarihi = `${yil}-${ay}-${gun}`;
console.log(bugununTarihi);
 const gununSorusu=gununSoruları.find(e=>e.date===bugununTarihi);
 const { image, hints, title, description, solutionImage, topic } = gununSorusu;
    // !günün sorusu Modal

  return (
    <div>
         <div className="flex-1">

            <div className="bg-white  rounded-3xl shadow-xl p-6">
               <span className='inline-flex items-center font-semibold text-olive-700 '><FaFireAlt className='text-mustard-500  mr-2' /> Günün Sorusu</span> 
              <div className="mt-4 max-h-auto bg-gray-100 rounded-xl flex items-center justify-center">
              { gununSorusu && <img src={image}/>} 
              </div>
              <h3 className="mt-5 text-xl text-olive-800 font-bold">
               {title}
              </h3>

              <p className="mt-3 text-gray-600">
               {description}
             
              </p>
              
              
            </div>
          </div>
          {isModalOpen && (<GununSorusuModal image={image} hints={hints} solutionImage={solutionImage} onClose={onClose} topic={topic} />)}
       
            
    </div>
  )
}

export default GununSorusuCard

