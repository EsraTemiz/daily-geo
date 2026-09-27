import React from 'react'

const YapilanHatalar = () => {
  return (
    <div className=' '>
     <h3  className='text-olive-700 text-2xl font-bold mb-4 '>Sık Yapılam Hatalar</h3>
     <div className=' rounded-2xl p-4 '>
        <details className='text-olive-500  shadow '>
        <summary className='p-3 '>
       İkizkenar Üçgende Yüksekliğin görevleri Hakkında
        </summary>
        <p className='p-3'>
           İkizkenarda yükseklik hem açıortay hem kenarortaydır .
        </p>
     </details>
        <details className='text-olive-500 shadow'>
        <summary className='p-3 '>
         ikizkenar üçgende taban açılarına ait yükseklik eşitliği
        </summary>
        <p className='p-3'>
       sorularda bu yüksekliklerden biri verilmişse diğerini çizmeyi unutmak yada bun kullanacağını unutmak.
        </p>
     </details>
        <details className='text-olive-500 shadow'>
        <summary className='p-3 '>
        Yardımcı elemanların kesişim noktaları ile ilgili.
        </summary>
        <p className='p-3'>
          Bu tanımları bilmiyor olmak ve bunları kullanmayı gözardı etmek
        </p>
     </details>
        <details className='text-olive-500 shadow'>
        <summary className='p-3 '>
       Alan paylaştırmada S 'leme mantığında
        </summary>
        <p className='p-3'>
         Alanda taban oranı verilen iki üçgenin Yüksekliklerinin aynı olması gerektiğine dikkat etmemek.
        </p>
     </details>
     </div>
    </div>
  ) 
}

export default YapilanHatalar
