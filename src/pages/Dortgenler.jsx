import React from 'react'
import gununSoruları from '../data/gununSorusu';
import SoruAnalizi from '../components/SoruAnalizi';
const Dortgenler = () => {
const topic="dortgenler"; 
const bugun = new Date();
const yil = bugun.getFullYear();
const ay = String(bugun.getMonth() + 1).padStart(2, "0");
const gun = String(bugun.getDate()).padStart(2, "0");

const bugununTarihi = `${yil}-${ay}-${gun}`;
const yeniSoru=gununSoruları.find(e=>e.date===bugununTarihi && e.topic===topic)
  return (
    <div>
      <p>Dörtgenler Burada</p>
    {yeniSoru && <SoruAnalizi title={yeniSoru.title} image={yeniSoru.image} solutionImage={yeniSoru.solutionImage} hints={yeniSoru.hints}/>}
    </div>
  )
}

export default Dortgenler

