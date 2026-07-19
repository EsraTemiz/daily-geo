
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route,NavLink
} from "react-router-dom";
import Lise from './components/Lise';
import Ucgenler from './components/Ucgenler'
import Dortgenler from './components/Dortgenler'
import Cokgenler from './components/Cokgenler'
// import MainPage from './components/MainPage';
function App() {
  return (
    <>
 <BrowserRouter>
  <Navbar />
    <Routes>
         <Route path="/" element={<h1>Hoşgeldin</h1>} />
        <Route path="/ilkokul" element={<h1>İlkokul Soruları</h1>} />
        <Route path="/ortaokul" element={<h1>Ortaokul Soruları</h1>} />
        <Route path="/lise" element={<Lise/>} />
        <Route path="/lise/ucgenler" element={<Ucgenler/>}/> 
        <Route path="/lise/dortgenler" element={<Dortgenler/>}/> 
        <Route path="/lise/cokgenler" element={<Cokgenler/>}/> 
        <Route path="/eglence" element={<h1>Eğlenceli Sorular</h1>} />
        <Route path="/zeka" element={<h1>Zeka Soruları</h1>} />
    </Routes>
      <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
