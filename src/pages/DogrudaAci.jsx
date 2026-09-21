import React from 'react'
import SoruAnalizi from '../components/SoruAnalizi'
import Acı from "../assets/d.Acı9.png";
import gununSorusu from '../data/gununSorusu';

const DogrudaAci = () => {
const topic= "dogruda-acilar";
  return (
    <div>
      {gununSorusu.topic===topic && <SoruAnalizi title={gununSorusu.title} solutionImage={gununSorusu.solutionImage} hints={gununSorusu.hints} image={gununSorusu.image}/>}
      <SoruAnalizi title="Doğruda Açılar"  solutionImage={Acı} image={Acı} hints={[" Bu soruda ilk dikkat edilmesi gereken nokta ;180 derece ile kg arasında doğru orantı kurmak", "180 derece 150 kg ise..?","orantı özülerek sonuç bulunur"]}/>
    </div>
  )
}

export default DogrudaAci


