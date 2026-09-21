import React from 'react'
import SoruAnalizi from '../components/SoruAnalizi'
import Ucgen from '../assets/ucgen.png'
const Ucgenler = () => {
  return(
<div>
 <SoruAnalizi title="Üçgende Açı" image={Ucgen} solutionImage={Ucgen} hints={[" bu soruda öncelikle ikizkenarın YAKİ kodlamasını hatırla"," açıortay,kenarortay yükseklik ve ikizkenarlık durumlarından iksi varsa diğer ikisini biz yerelştirebiliriz","o zaman alan ve taban eşittir dersek bu sadece alan özelliğidir ve bu ikisi doğru olur,ikizkenar özelliklerinden herhangi ikisi değil!"]}/>


    </div>

  )
}
export default Ucgenler

