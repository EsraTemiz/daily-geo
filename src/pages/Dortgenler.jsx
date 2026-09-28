import React from 'react'
import gununSoruları from '../data/gununSorusu';
import SoruAnalizi from '../components/SoruAnalizi';

const Dortgenler = () => {
const topic="dortgenler"; 

const yeniSorular=gununSoruları.filter(e => e.topic===topic)
  return (
    <div>
      <p>Dörtgenler Burada</p>
     {yeniSorular.map(e=>
      <SoruAnalizi
      title={e.title}
      image={e.image}
      solutionImage={e.solutionImage}
      hints={e.hints}
      
      />
     )}
    </div>
  )
}

export default Dortgenler

