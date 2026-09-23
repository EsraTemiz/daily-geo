import React from 'react'
import gununSoruları from '../data/gununSorusu';
import SoruAnalizi from '../components/SoruAnalizi';
import bugununTarihi from '../utils/tarih';
const Dortgenler = () => {
const topic="dortgenler"; 

const yeniSoru=gununSoruları.find(e=>e.date===bugununTarihi && e.topic===topic)
  return (
    <div>
      <p>Dörtgenler Burada</p>
    {yeniSoru && <SoruAnalizi title={yeniSoru.title} image={yeniSoru.image} solutionImage={yeniSoru.solutionImage} hints={yeniSoru.hints}/>}
    </div>
  )
}

export default Dortgenler

