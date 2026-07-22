
import React from 'react'
import geo from '../assets/geo-gorsel.svg'
const MainPage = () => {
  const analizler = [
  {
    id: 1,
    title: "Doğruda Açılar",
    tag: "TYT"
  },
  {
    id: 2,
    title: "Üçgenlerde Açı",
    tag: "AYT"
  },
  {
    id: 3,
    title: "Çemberde Teğet",
    tag: "Yeni Nesil"
  }
];
  return (<>
    <section className="bg-olive-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Sol Taraf */}
          <div className="flex-1">

            <span className="inline-block bg-white px-4 py-2 rounded-full shadow text-sm text-olive-800 mb-4">
              🧠 Çözüm Stratejileri
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-olive-900 leading-tight">
              Soruyu Çözmeden Önce
              <br />
              Nasıl Düşündüğünü Keşfet
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Daily Geometry, geometri sorularını sadece çözmeyi değil;
              ipuçlarını fark etmeyi, sık yapılan hataları görmeyi ve
              çözüm stratejileri geliştirmeyi öğretir.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-olive-700 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition">
                🔥 Günün Sorusu
              </button>

              <button className="bg-white px-6 py-3 rounded-xl shadow hover:scale-105 transition">
                📚 Son Analizler
              </button>
            </div>

          </div>

          {/* Sağ Taraf */}
          <div className="flex-1">

            <div className="bg-white rounded-3xl shadow-xl p-6">

              <span className="text-sm font-semibold text-olive-700">
                🔥 Günün Sorusu
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
    <section className="max-w-7xl mx-auto px-6 py-16">

  <h2 className="text-3xl font-bold text-olive-700 mb-2">
    Son Eklenen Analizler
  </h2>

  <p className="text-gray-600 mb-10">
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

      <button className="mt-4 text-olive-700 font-medium">
        Analizi İncele →
      </button>

    </div>

  </div>
))}

  </div>
  </section>
    </>
  );
}

export default MainPage
