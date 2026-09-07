import React from 'react'
import { useEffect,useState,useRef } from 'react'

const GeometryScene = () => {
  const [isVisible,setIsVisible]=useState(false);
  const sectionRef=useRef(null);
  useEffect(()=>{
 const observer= new IntersectionObserver((entries)=>{
    setIsVisible(entries[0].isIntersecting)
  });
  observer.observe(sectionRef.current);
  return ()=>{
    observer.disconnect();
    };
  
  },[]);
 

  return (
     
    <section ref ={sectionRef} className={`geometry-scene px-6 py-16 bg-dark text-cream/20 overflow-hidden transition-all duration-700 ${isVisible ?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
      <div className=" max-w-7xl mx-auto"> 
        <div className='text-center space-y-4 '>
        <p className='text-sm uppercase tracking-widest font-medium'>Bugünün geometrisi</p>

        <h2 className='text-4xl font-bold md:leading-2  '>Geometri Sahnesinde Bugün</h2>

        <p className='text-base'>
          Geometriye biraz farklı bir açıdan bak.
        </p>
        </div>
      </div>

      <div className="geometry-scene__visual mt-12 mx-auto h-80 max-w-4xl bg-cream rounded-2xl relative">
        <div className='h-24 w-24 rounded-full bg-amber-400 absolute top-8 right-12' ></div>  
        {/* İllüstrasyon daha sonra buraya gelecek */}
      </div>
    </section>
  
  )
}

export default GeometryScene

