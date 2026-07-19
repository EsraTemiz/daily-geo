import React, { useState,useEffect } from 'react';
import  './Navbar.css';
import logo from '../assets/math.logo.svg';
import { FaSearch } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { IoMoonSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
const [bgColor,setbgColor]=useState(()=>{
  return localStorage.getItem("theme")==="dark";
});
const MenuItems=[
  {path :"/ilkokul",label:"ilkokul"},
  {path :"/ortaokul",label:"ortaokul"},
  {path :"/lise",label:"lise"},
  {path :"/eglence",label:"eğlence"},
  {path :"/zeka",label:"zeka"},
];

const [isMenuClick,setMenuClick]=useState(false);
const upDateMenu =()=>{
 setMenuClick(!isMenuClick)
}
useEffect(()=>{
  document.body.classList.remove("dark" ,"light");
  document.body.classList.add(bgColor ? "dark":"light");
  localStorage.setItem("theme",bgColor ? "dark":"light");
},[bgColor])

  return (
    <div  className=''> 
      {/* upper navbar */}
  <div className='bg-emerald-600 py-1 shadow-md flex items-center justify-center'>
    <div className= 'container sm:flex justify-center items-center '>
   
       <div className='sun m-1 '>
       {bgColor ? (
    <IoMoonSharp className='text-xl font-bold  text-olive-800' onClick={() => setbgColor(false)} />
  ) : (
    <CiLight  className='text-xl font-bold  text-olive-800 ' onClick={() => setbgColor(true)} />
  )}
       
      </div>
      {/* search bar*/}
      <div className='group relative m-1.5 '>
        <input type="text" placeholder='search' className=' mt-1 w-25 sm:w-30 group-hover:w-60 transition-all duration-300 rounded-full border text-olive-800  px-2 py-1 focus:outline-none focus:border-2 focus:border-blue-800' />
       < FaSearch className=' text-olive-800 absolute top-2 right-0 sm:top-1 sm:translate-y-3 sm:right-3  '/>
      </div>
    </div>
  </div>
{/* lower navbar */}
<div className=''>
  <div className=' h-18 flex items-center justify-between bg-emerald-500 relative '>
   <div className='w-15 h-15'>
        <Link to='/' className=' flex  text-2xl text-olive-800'> 
          <img className='w-15 h-15' src ={logo} alt="logo"/>
          Daily Geometry
        </Link> 
      </div>
  <div className={ `
  absolute sm:static top-full left-0 w-full sm:w-auto
    bg-emerald-700 sm:bg-transparent
    shadow-md sm:shadow-none z-50 overflow-hidden
    transition-all duration-300 ease-in-out
    ${isMenuClick ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
    sm:max-h-none sm:opacity-100 sm:translate-y-0
  
  `}>
     {/* menu is here */}
   <ul className='flex flex-col sm:flex-row md:items-center md:gap-6 p-4 sm:p-0 gap-3 text-white'>
    {MenuItems.map((item)=>(
      <li key={item.path} className='group'>
        <NavLink to={item.path} onClick={()=>setMenuClick(false)} className={({isActive})=>
        `
  relative px-3 py-1 rounded transition-all duration-300
  ${isActive ? "text-white font-semibold" : "text-white/80"}
  after:content-[''] after:absolute after:left-0 after:bottom-0
  after:h-0.5 after:bg-blue-800
  after:transition-all after:duration-300
  ${isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"}
  `
  
      }>

        {item.label}
        </NavLink>
      </li>
    ))}
   </ul>

  </div>
 
<GiHamburgerMenu onClick={upDateMenu} className='sm:hidden text-olive-800 text-2xl'/>
</div>

</div>
    </div>
  
  )

}

export default Navbar

