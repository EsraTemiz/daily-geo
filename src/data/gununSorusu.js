
import Aci2 from "../assets/dogrudaAci2soru.png"
import aci2Cozum from "../assets/dogrudaAci2.png"
import UcgendeAcı2 from "../assets/UcgendeAcı2.png"
import Ucgen2Cozum from "../assets/UcgendeAcı2Sonuc.png"
const gununSoruları =[
    {
    id:1,
    title:"Doğruda Açı ",
    date:"2026-09-21",
    image:Aci2,
    description:"Bu soruda öğrenciler tek değişkene bağlı açıyı yazmak gerektiğini dikkate almıyor",
    topic:"dogruda-acilar",
    hints:[
    " açıya alfa diyerek başlarsak,bütünlerinin ölçüsü 180-a..",
    "oranlayıp,içler dışlar çarpımı yap",
    "alfa buradan gelecek."
  ],
    solutionImage:aci2Cozum
   },
  
   {
    id:2,
    date:"2026-09-22",
    title:"Üçgende Açı",
    image:UcgendeAcı2,
    description:"Bu soruda öğrenciler tek değişkene bağlı açıyı yazmak gerektiğini dikkate almıyor",
    topic:"ucgenler",
    hints:[
    " açıya alfa diyerek başlarsak,bütünlerinin ölçüsü 180-a..",
    "oranlayıp,içler dışlar çarpımı yap",
    "alfa buradan gelecek."
  ],
    solutionImage:Ucgen2Cozum
   }
];

export default gununSoruları;