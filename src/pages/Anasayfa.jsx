import React from 'react'
import CarouselFadeExample from "../components/CarouselFadeExample"
import GridRow from "../components/GridRow"
import CustomNavbar from '../components/CustomNavbar'
import Footer from './Footer'



const Anasayfa = () => {
  return (
    <>
    <CustomNavbar></CustomNavbar>
    <CarouselFadeExample/> 
    <hr />
    <GridRow/>
    <Footer/>
    </>
  )
}

export default Anasayfa