
import React from 'react'
import {Link} from "react-router-dom"
const AnalysisCard = () => {
     const analizler = [
  {
    id: 1,
    title: "Doğruda Açılar",
    tag: "TYT",
    description:"Karşılıklı, tümler ve bütünler açı ilişkilerini çıkarım yaparak çözmeyi öğren"
  },
  {
    id: 2,
    title: "Üçgenlerde Açı",
    tag: "AYT",
    description:"Karşılıklı, tümler ve bütünler açı ilişkilerini çıkarım yaparak çözmeyi öğren"
  },
  {
    id: 3,
    title: "Çemberde Teğet",
    tag: "Yeni Nesil",
    description:"Karşılıklı, tümler ve bütünler açı ilişkilerini çıkarım yaparak çözmeyi öğren"
  }
];
  return (
    <div>
  <h2 className="text-3xl font-bold text-olive-700 mb-2">
    Geometri Analizleri
  </h2>

  <p className="text-olive-800 text-2xl py-6">
    Geometri sorularına farklı bakış açıları kazandıran analizler.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{analizler.map((analiz) => (
  <div
    key={analiz.id}
    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
  >

    <div className="h-48 bg-gray-200 flex items-center justify-center">
      Görsel
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
      <Link to={`/analizler/${analiz.id} `} className="mt-4 text-olive-700 font-medium">
        Analizi İncele →
      </Link>

    </div>

  </div>
))}
  </div>
  
    </div>
  )
}

export default AnalysisCard
