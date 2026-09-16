import React from 'react'
import { FaFireAlt } from "react-icons/fa";
 import gununSorusu from "../data/gununSorusu.js"
// import Aci2 from "../assets/dogrudaAci2.png" 
const GununSorusuCard = () => {
  return (
    <div>
         <div className="flex-1">

            <div className="bg-white rounded-3xl shadow-xl p-6">
               <span className='inline-flex items-center font-semibold text-olive-700 '><FaFireAlt className='text-mustard-500  mr-2' /> Günün Sorusu</span> 
              <div className="mt-4 h-56 bg-gray-100 rounded-xl flex items-center justify-center">
               <img src={gununSorusu.image}/>
              </div>
              <h3 className="mt-5 text-xl text-olive-800 font-bold">
               {gununSorusu.title}
              </h3>

              <p className="mt-3 text-gray-600">
               {gununSorusu.description}
              </p>
              <button className="mt-5 w-full   text-white py-3 rounded-xl">
                Analizi İncele
              </button>

            </div>

          </div>
    </div>
  )
}

export default GununSorusuCard

