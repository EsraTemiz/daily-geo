import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';
const Footer = () => {

  return (
<>
  
  <footer className='  bg-olive-700 text-olive-100 shadow-md '> 
      <div className= 'container  mx-auto px-6 py-8 '>
        {/* proje Hakkında */}
     <div className='p-5 border-b border-olive-900'>
      <h3 className='text-olive-900 text-lg font-semibold mb-3'>Proje Hakkında</h3>
        <p>Daily Geometry ,günlük sorular üzerinden Geometriyi öğrenme açısından ipuçları ile öğrenciyi yönlendirerek çözüme kendisinin ulaşmasını sağlamak için tasarlanmıştır</p>
     </div>
       {/* Kısayollar */}
   
     <div className='p-5 '>
      <h3 className='text-olive-900 text-lg  font-semibold mb-3 '>KısaYollar</h3>
    
      <div className='flex flex-col gap-2'>
          <Link to="/" className='hover:text-olive-900 transition-colors duration-200'>Anasayfa</Link>
          <Link to="/lise" className='hover:text-olive-900 transition-colors duration-200'>Lise</Link>
          <Link to="/ortaokul" className='hover:text-olive-900 transition-colors duration-200'>Ortaokul</Link>
          <Link to="/ilkokul" className='hover:text-olive-900 transition-colors duration-200'>İlkokul</Link>
          <Link to="/zeka" className='hover:text-olive-900 transition-colors duration-200'>Zeka</Link>
          <Link to="/eglence" className='hover:text-olive-900 transition-colors duration-200'>Eğlence</Link>
        </div>  
      </div>
     {/* İletişim Bilgileri */}
    <div className=' flex flex-col md:flex-row justify-evenly items-center  border-b border-olive-900 '>
  <div className='p-5 flex items-center'>
    <a href="https://www.instagram.com/temiz_esraa/" target="_blank" rel="noopener noreferrer">
      <IoLogoInstagram className='m-2 size-5 hover:text-olive-900' />
    </a>
    <p>Instegram</p>
  </div>
  <div className='p-5 flex items-center'>
    <a href="">
     <FaPhoneSquareAlt className='m-2 size-5 hover:text-olive-900' />
    </a>
  <p>Telefon</p>
  </div>
  <div className='p-5 flex items-center'>
    <a href="mailto:esratemizz@hotmail.com">
     <MdOutlineMail className='m-2 size-6 hover:text-olive-900' />
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

