import React from 'react'
  import { GiBrain } from "react-icons/gi";
import { CiWarning } from "react-icons/ci";
import { FaFireAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";

const FeatureSection = () => {
  let smallCard=[
{  icon:<GiBrain/>,
   id:1,
  title:"Çözüm Stratejileri",
  description:"Sadece cevabı değil düşünme sürecini öğren"
},
{ icon:<CiWarning/>,
  id:2,
  title:"Sık Yapılan Hatalar",
  description:"Yaptığın hataları diğer öğrencilerle karşılaştır"
},
{ icon:<FaFireAlt/>,
  id:3,
  title:"Günün Sorusu",
  description:"Her gün güncel bir soruyla kendini test et"
},
{ icon:<FaRegLightbulb/>,
  id:4,
  title:"Günün İpucu",
  description:"Herhangi bir konuda soru çözerken en çok neye dikkat etmelisin"
}
  ]
  return (
    
    <div className='text-center max-w-3xl mx-auto'>
      <h2 className='text-4xl text-olive-700 font-bold py-3'> Neden Daily Geometry?</h2>
      <p className='text-xl text-olive-800 mt-4'> Geometriyi yalnızca çözmeyi değil, doğru düşünmeyi hedefleyen bir öğrenme deneyimi.</p>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 '>
        
          {smallCard.map((special) => (
           <div key={special.id} className='h-full flex flex-col border border-olive-200 bg-white rounded-2xl p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl '>
            <span className='text-4xl text-mustard-500 mb-4 inline-block'>{special.icon}</span>
            <h2 className='text-xl font-bold text-dark mt-2 mb-3'>
              {special.title}
             </h2>
              <p className='text-olive-800 leading-7' >
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

