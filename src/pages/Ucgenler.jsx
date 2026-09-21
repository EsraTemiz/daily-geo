import React from 'react'
import SoruAnalizi from '../components/SoruAnalizi'
import Ucgen from '../assets/ucgen.png'
import gununSorusu from '../data/gununSorusu';
const Ucgenler = () => {
  const bugun = new Date();

const yil = bugun.getFullYear();
const ay = String(bugun.getMonth() + 1).padStart(2, "0");
const gun = String(bugun.getDate()).padStart(2, "0");

const bugununTarihi = `${yil}-${ay}-${gun}`;
  const topic="ucgenler";
  const bugundeKal = gununSorusu.find(
  e => e.date === bugununTarihi && e.topic === topic
);
  return(
<div>
  {bugundeKal && <SoruAnalizi title={bugundeKal.title} solutionImage={bugundeKal.solutionImage} hints={bugundeKal.hints} image={bugundeKal.image}  />}
 <SoruAnalizi title="Üçgende Açı" image={Ucgen} solutionImage={Ucgen} hints={[" bu soruda öncelikle ikizkenarın YAKİ kodlamasını hatırla"," açıortay,kenarortay yükseklik ve ikizkenarlık durumlarından iksi varsa diğer ikisini biz yerelştirebiliriz","o zaman alan ve taban eşittir dersek bu sadece alan özelliğidir ve bu ikisi doğru olur,ikizkenar özelliklerinden herhangi ikisi değil!"]}/>


    </div>

  )
}
export default Ucgenler

