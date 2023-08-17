import './App.css'
// import CarouselFadeExample from './components/CarouselFadeExample'
import CustomNavbar from './components/CustomNavbar'
// import GridRow from './components/GridRow'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Hakkimizda from './pages/Hakkimizda' 


function App() {

  return (
    <>
    <div>
      <CustomNavbar></CustomNavbar>
      <Routes>
        <Route path="/Hakkimizda" element={<Hakkimizda></Hakkimizda>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
