import './App.css'
// import CarouselFadeExample from './components/CarouselFadeExample'
import CustomNavbar from './components/CustomNavbar'
// import GridRow from './components/GridRow'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Hakkimizda from './pages/Hakkimizda'
import Hizmetler from './pages/Hizmetler'
import Iletisim from './pages/Iletisim'


function App() {

  return (
    <>
    <div>
      <CustomNavbar></CustomNavbar>
      <Routes>
        <Route path="/Hakkimizda" element={<Hakkimizda></Hakkimizda>}></Route>
        <Route path="/Hizmetler" element={<Hizmetler></Hizmetler>}></Route>
        <Route path="/Iletisim" element={<Iletisim></Iletisim>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
