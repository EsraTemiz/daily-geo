import React from 'react'
import {hatalar} from '../data/sikYapilanHatalar.js'
import '../styles/app.css'
const YapilanHatalar = () => {
  
  return (
    <div className=' '>
     <h3  className='text-olive-700 text-2xl font-bold mb-4 '>Sık Yapılam Hatalar</h3>
     <div className='   '>
       { hatalar.map(e=>
        <details key={e.id} className='text-olive-500  shadow rounded-2xl '>
        <summary className='p-3'>
        {  e.title}  
        </summary>
          <p className='p-3 text-olive-800 bg-olive-200 rounded-b-2xl overflow-hidden
    max-h-0 transition-all duration-300 ease-in-out  '>
            {e.description}
        </p>
     </details>
       )
       }  
     </div>
    </div>
  ) 
}

export default YapilanHatalar
