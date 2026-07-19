import React from 'react'
import { Link } from 'react-router-dom'
import geo from '../assets/geo-gorsel.svg'
// import Question from '../components/Question'
const Lise = () => {
   const konular=[
   {
    path:"/lise/ucgenler",
    title:"Üçgenler"
   },
   {
    path:"/lise/dortgenler",
    title:"Dörtgenler"
   },
   {
    path:"/lise/cokgenler",
    title:"Çokgenler"
   },
   {
    path:"/lise/cember",
    title:"Çember"
   },
   {
    path:"/lise/analitik-geometri",
    title:"Analitik Geometri"
   }

   ]
//     const questions=[
//         {id:1,
//          question:"üçgenin yardımcı elemanları nelerdir?",
//          answer:"kenarortay,açıortay,yükseklik,kenar Orta Dikme"
//         },
//         {id:2,
//          question:"bir üçgende iç açıortayların kesişimi ne oluşturur?",
//          answer:"iç teğet çemberin merkezi"
//         },
//         {
//           id:3,
//           question:"bir üçgende dış teğet çember kaç tanedir?",
//           answer:"3 tanedir"
//         }
//     ]
  return (
<div className='p-10 pb-10 md:flex md:justify-center md:items-center '>
{/* //     <div className='mb-2 p-2'> */}
{/* //         {questions.map((item)=>( <Question key={item.id} question={item.question} answer={item.answer}/>))} */}
{/* //     </div> */}

<div className='container ml-auto mr-auto'>

<div className='lg:flex justify-center items-center '>
   <div className=" " > 
<h1 className='text-2xl text-olive-800 mb-4'>Konu Başlıkları</h1>
{konular.map((konu)=>
  (<Link key={konu.path} to={konu.path}>
   <div className='border-olive-800 p-4 rounded shadow-xl sm:w-2xl lg:w-3xl  m-0.5 hover:bg-olive-500 transition-all duration-300 hover:scale-105'> 
      {konu.title}
   </div>
  </Link>))
 }
 </div>
   <div className='border-olive-600 md:w-xl lg:w-80 shadow lg:ml-7 h-80 '>
   <img className=' sm:w-2xl md:w-xl h-90 sm:object-fill md:object-cover'  alt= 'geometri-gorseli' src={geo}/>
   </div>
 </div>
 </div>
</div>
 );
 }; 
export default Lise
 
