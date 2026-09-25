
import Aci2 from "../assets/dogrudaAci2soru.png"
import aci2Cozum from "../assets/dogrudaAci2.png"
import UcgendeAcı2 from "../assets/UcgendeAcı2.png"
import Ucgen2Cozum from "../assets/UcgendeAcı2Sonuc.png"
import Dortgen1 from "../assets/dortgen1.png"
import GununTarihi from "../utils/tarih"
const gununSoruları =[
    {
    id:1,
    title:"Doğruda Açı ",
    date:"2026-09-24",
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
    description:"Bu soruda öğrencilerin sık yaptığı hatalar,açı yerleştirirse kenar eşitliği yerleştirmiyor,kenar eşitliği yerleştirirse,açı eşitliği yerleştirmiyir,her ikisi de önemli",
    topic:"ucgenler",
    hints:[
    " Burada Eşkenar Üçgen mantığında açı ve kenar eşitliğine dikkat etmelisin.",
    "kesilen parçada kenar eşitliğini göstermeyi unutma",
    "Yeni bir ikizkenarlık bulmalısın.."
  ],
    solutionImage:Ucgen2Cozum
   },
   {
    id:3,
    date:"2026-09-25",
    title:"Dörtgenler",
    image:Dortgen1,
    description:"öğrenciler burada dik üçgen ve ikizkenar yamuk bağlantısın kurmalıdır. ",
    topic:"dortgenler",
    hints:[
    " C'den indiğin dikmeyle dik üçgene ait birşey farketmelisin..",
    "ikizkenar yamuk-yükseklik özelliklerini hatırla..",
    "Karenin kenar Eşitliğini yerleştirip sonuca ulaş."
  ],
    solutionImage:Dortgen1
   }

];
 const today=GununTarihi;
 const todayQuestion=gununSoruları.find(soru=>soru.date===today);
 const sortedQuestions=[...gununSoruları].sort((a ,b)=>
  { return new Date(b.date) - new Date(a.date);
 });
const bannerQuestion=todayQuestion ||sortedQuestions[0]
export { bannerQuestion };
export default gununSoruları;