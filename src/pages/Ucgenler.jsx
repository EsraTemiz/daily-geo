import React from 'react'
import SoruAnalizi from '../components/SoruAnalizi'
import Ucgen from '../assets/ucgen.png'
const Ucgenler = () => {
  return(
<div>
 <SoruAnalizi title="Üçgende Açı" image={Ucgen} hints={[" bu soruda öncelikle ikizkenarın YAKİ kodlamasını hatırla"," açıortay,kenarortay yükseklik ve ikizkenarlık durumlarından iksi varsa diğer ikisini biz yerelştirebiliriz"]} solution ={"o zaman alan ve taban eşittir dersek bu sadece alan özelliğidir ve bu ikisi doğru olur,ikizkenar özelliklerinden herhangi ikisi değil!"}/>
 <SoruAnalizi title="Üçgende Açı" image={Ucgen} hints={[" Bu soruda ilk dikkat edilmesi gereken nokta ;180 derece ile kg arasında doğru orantı kurmak", "180 derece 150 kg ise..?"]} solution ={"orantı özülerek sonuç bulunur"}/>

    </div>

  )
}
export default Ucgenler

