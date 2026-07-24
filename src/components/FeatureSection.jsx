import React from 'react'
import { GiBrain } from "react-icons/gi";
import { CiWarning } from "react-icons/ci";
import { FaFireAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";

const FeatureSection = () => {
  let smallCard=[
{  icon:<GiBrain/>,
   id:1,
  title:"Çözüm Steratejileri",
  description:"Sadece cevabı değil düşünme sürecini öğren"
},
{ icon:<FaRegLightbulb/>,
  id:2,
  title:"Sık Yapılan Hatalar",
  description:"yaptığın Hataları diğer öğrencilerle karşılaştır"
},
{ icon:<FaFireAlt/>,
  id:3,
  title:"Günün Sorusu",
  description:"Her gün günvel bir soruyla kendini test et"
},
{ icon:<CiWarning/>,
  id:4,
  title:"Günün İpucu",
  description:"Herhangi bir konuda soru çözerken en çok neye dikkat etmelisin"
}
  ]
  return (
    
    <div className=''>
      <h2 className='text-3xl text-olive-700 font-bold py-3'> Neden Daily Geometry?</h2>
      <p className='text-xl text-olive-800 py-3'> Geometriyi yalnızca çözmeyi değil, doğru düşünmeyi hedefleyen bir öğrenme deneyimi.</p>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 '>
        
          {smallCard.map((special) => (
           <div key={special.id} className='border-olive-500  shadow-lg  rounded-2xl p-3 '>
            <span className='text-xl text-mustard-500'>{special.icon}</span>
            <h2 className='text-xl text-dark font-bold'>
              {special.title}
             </h2>
              <p className='text-olive-800 ' >
                  {special.description}
              </p>
             </div>
          ))
          }

       
     </div>

      </div>
   
  
  )
}

export default FeatureSection

