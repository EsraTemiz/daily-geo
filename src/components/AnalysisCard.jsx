
import React, { useRef } from 'react'
import {Link} from "react-router-dom"
import DogrudaAci from "../assets/dogrudaAci2soru.png"
import UcgendeAci from "../assets/UcgendeAcı2.png"
import paralelkenar from "../assets/paralelkenar.png"
import cokgen from "../assets/cokgen.png"
import cember from "../assets/cember.png"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import '../styles/AnalysisCard.css'
const AnalysisCard = () => {
  const sliderRef=useRef(null)
     const analizler = [
  {
    id: 1,
    title: "Doğruda Açılar",
    tag: "TYT",
    description:"Karşılıklı, tümler ve bütünler açı ilişkilerini çıkarım yaparak çözmeyi öğren",
    questionImage:DogrudaAci,
    topic:"dogruda-acilar"
  },
  {
    id: 4,
    title: "Çemberde Açı",
    tag: "AYT",
    description:"çemberde açıda teğet kiriş özelliklerini doğru kullan",
    questionImage:cember,
    topic:"cember"
  },

  {
    id: 2,
    title: "Üçgenlerde Açı",
    tag: "AYT",
    description:"Karşılıklı, tümler ve bütünler açı ilişkilerini çıkarım yaparak çözmeyi öğren",
    questionImage:UcgendeAci,
     topic:"ucgenler"

  },
  {
    id: 3,
    title: "Dörtgenler",
    tag: "Yeni Nesil",
    description:"Karşılıklı, tümler ve bütünler açı ilişkilerini çıkarım yaparak çözmeyi öğren",
    questionImage:paralelkenar,
    topic:"dortgenler"
  },
  {
    id: 5,
    title: "Çokgenler",
    tag: "AYT-TYT",
    description:"katlama sorularında kenar eşitlikleri göstermeye dikkat etmelisin",
    questionImage:cokgen,
    topic:"cokgenler"
  },
];
  return (
    <div>
  <h2 className="text-3xl font-bold text-olive-700 mb-2">
    Geometri Analizleri
  </h2>

  <p className="text-olive-800 text-2xl py-6">
    Geometri sorularına farklı bakış açıları kazandıran analizler.
  </p>
  <div className='flex justify-center items-center gap-6 w-full mt-4 p-5
  '>
      <div onClick={()=>sliderRef.current.scrollBy({
          left:-340,
          behavior:"smooth"
        })} className='w-10 h-10 md:w-15 md:h-15 bg-olive-300 rounded-full flex justify-center items-center cursor-pointer'>
     
        <FaArrowLeft  className='font-bold text-olive-700 text-3xl'/>
        </div>
  <div ref={sliderRef} className=" flex-1 min-w-0 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory items-center scrollbar-hidden">
{analizler.map((analiz) => (
  <div 
    key={analiz.id}
    className="shrink-0 w-[320px] snap-start bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition "
  >

    <div className="h-48 bg-gray-200 flex items-center justify-center">
   <img src={analiz.questionImage} alt={analiz.title} className="w-full h-full object-cover" />
    </div>

    <div className="p-5">

      <span className="bg-mustard-500 text-white px-3 py-1 rounded-full text-sm">
        {analiz.tag}
      </span>

      <h3 className="mt-4 text-xl font-semibold text-olive-700">
        {analiz.title}
      </h3>
      <p className='text-olive-800'> 
        {analiz.description}
      </p>
      <Link to={`/lise/${analiz.topic}`} className="mt-4 text-olive-700 font-medium">
        Analizi İncele →
      </Link>

    </div>

  </div>
))}
  </div>
   <div onClick={()=>sliderRef.current.scrollBy({
          left:344,
          behavior:"smooth"
        })}   className='w-10 h-10 md:w-15 md:h-15 bg-olive-300 rounded-full flex justify-center items-center'><FaArrowRight className='font-bold text-olive-700 text-3xl' /></div>
  </div>
  
    </div>
  )
}

export default AnalysisCard
