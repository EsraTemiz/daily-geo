import React from 'react'
import Aci2 from "../assets/dogrudaAci2.png" 
const GununSorusuModal = ({onClose}) => {
  return (
    <div>
      <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
         
         <div className='bg-white p-8 rounded-2xl'>
          <img  src={Aci2}/>
         </div>
         <button className=' border-2 rounded ml-1 bg-olive-500 p-1' onClick={onClose}>Kapat</button>
      </div>
    </div>
  )
}

export default GununSorusuModal


