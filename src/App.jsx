import './App.css'
import CustomNavbar from './components/CustomNavbar'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Hakkimizda from './pages/Hakkimizda'
import Iletisim from './pages/Iletisim'
import Anasayfa from './pages/Anasayfa'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'


function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Anasayfa></Anasayfa>}></Route>
        <Route path="/Hakkimizda" element={<Hakkimizda></Hakkimizda>}></Route>
        <Route path="/Iletisim" element={<Iletisim></Iletisim>}></Route>
      </Routes>
    </div>

    <div>
      <Routes>
        <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
