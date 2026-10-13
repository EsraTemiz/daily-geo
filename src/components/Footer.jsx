import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {

  return (
<>
  
  <footer className='  bg-olive-700 text-olive-100 shadow-md '> 
      <div className= 'container  mx-auto px-6 py-8 '>
        {/* proje Hakkında */}
     <div className='p-5 border-b border-olive-900'>
      <h3 className='text-olive-900 text-lg mb-2'>Proje Hakkında</h3>
        <p>Daily Geometry ,günlük sorular üzerinden Geometriyi öğrenme açısından ipuçları ile öğrenciyi yönlendirerek çözüme kendisinin ulaşmasını sağlamak için tasarlanmıştır</p>
     </div>
       {/* Kısayollar */}
     <div className='p-5 border-b border-olive-900'>
      <h3 className='text-olive-900 text-lg'>KısaYollar</h3>
     </div>
     {/* İletişim Bilgileri */}
    <div className=' flex justify-evenly items-center  border-b border-olive-900 '>
  <div className='p-5 flex items-center'>
    <a href="#">
      <IoLogoInstagram className='m-2 size-5  hover:text-olive-900' />
    </a>
    <p>Instegram</p>
  </div>
  <div className='p-5 flex items-center'>
    <a href="">
     <FaPhoneSquareAlt className='m-2 size-5   hover:text-olive-900' />
    </a>
  <p>Telefon</p>
  </div>
  <div className='p-5 flex items-center'>
    <a href="">
     <MdOutlineMail className='m-2 size-6   hover:text-olive-900' />
    </a>
  
  <p>Mail</p>
  </div>    
 </div>
   
     {/* Alt Bilgi */}
<div className="mt-6  pt-4 text-center text-sm">
  <p>© 2026 Daily Geometry. Tüm hakları saklıdır.</p>
</div>
  </div>
   
  </footer>
  
</>

  )
}

export default Footer

