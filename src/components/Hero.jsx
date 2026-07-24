import React from 'react'
import { FaFireAlt } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
const Hero = () => {
  return (
    <div>
       <section className="bg-olive-100 min-h-screen mb-16">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Sol Taraf */}
          <div className="flex-1">

            <span className="inline-block bg-white px-4 py-2 rounded-full shadow text-sm text-olive-800 mb-4">
          <GiBrain className='text-mustard-500'/> Çözüm Stratejileri
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-olive-900 leading-tight">
              Soruyu Çözmeden Önce
              <br />
              Nasıl Düşündüğünü Keşfet
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl ">
              Daily Geometry, geometri sorularını sadece çözmeyi değil;
              ipuçlarını fark etmeyi, sık yapılan hataları görmeyi ve
              çözüm stratejileri geliştirmeyi öğretir.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-olive-700 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition">
              <span className='flex justify-center items-center'><FaFireAlt className='text-mustard-500  mr-2' /> Günün Sorusu</span> 
              </button>

              <button className="bg-white px-6 py-3 rounded-xl shadow hover:scale-105 transition">
               <span className='flex justify-center items-center'><MdOutlineLibraryBooks className='text-mustard-500 mr-2'/> Son Analizler</span>
              </button>
            </div>

          </div>

          {/* Sağ Taraf */}
          <div className="flex-1">

            <div className="bg-white rounded-3xl shadow-xl p-6">

              <span className="text-sm font-semibold text-olive-700">
               <span className='flex '><FaFireAlt className='text-mustard-500  mr-2' /> Günün Sorusu</span> 
              </span>

              <div className="mt-4 h-56 bg-gray-100 rounded-xl flex items-center justify-center">
                Soru Görseli
              </div>

              <h3 className="mt-5 text-xl text-olive-800 font-bold">
                Doğruda Açılar
              </h3>

              <p className="mt-3 text-gray-600">
                Bu soruda öğrenciler genellikle ters açı ve
                bütünler açı ilişkilerini birlikte kullanmayı
                gözden kaçırıyor.
              </p>

              <button className="mt-5 w-full   text-white py-3 rounded-xl">
                Analizi İncele
              </button>

            </div>

          </div>

        </div>

      </div>
      
    </section>
    </div>
  )
}

export default Hero

