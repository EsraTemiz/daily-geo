import React from 'react'
import SoruAnalizi from '../components/SoruAnalizi'
import Acı from "../assets/d.Acı9.png";
const DogrudaAci = () => {
  return (
    <div>
      <SoruAnalizi title="Doğruda Açılar" image={Acı} hints={[" Bu soruda ilk dikkat edilmesi gereken nokta ;180 derece ile kg arasında doğru orantı kurmak", "180 derece 150 kg ise..?","orantı özülerek sonuç bulunur"]}/>
    </div>
  )
}

export default DogrudaAci


