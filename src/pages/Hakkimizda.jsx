import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer'
import { BsFillBasket2Fill, BsShareFill, BsStack, BsFill7SquareFill, BsFill2CircleFill, BsFill4CircleFill, BsArrowDownLeft } from "react-icons/bs";
import {HiStatusOnline} from "react-icons/hi"
import {RiRefund2Line} from "react-icons/ri"


import "./css/hakkimizda.css"

const Hakkimizda = () => {
  return (
    <>
    <CustomNavbar></CustomNavbar>

    <Container className='bckgrnd-header'>
      <Row>
        <Col className='marg-top'><br /><h1 style={{ textAlign: 'center' }} >Hakkımızda</h1></Col>
      </Row>

    

      <Row>
          <Col sm={7}>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reiciendis voluptatum, at possimus incidunt 
              laudantium nesciunt placeat ad hic debitis autem voluptatibus sint quaerat delectus temporibus qui quis animi 
              non blanditiis quos. Autem quidem dolor atque amet veritatis et quod architecto incidunt necessitatibus consectetur 
              soluta, in, nemo nostrum animi quasi officiis? Repellendus natus cupiditate corrupti? Facere esse commodi distinctio. 
              Autem veritatis eum doloribus debitis, obcaecati quae impedit eligendi quo? Natus esse et magnam a iste officia error
              corporis praesentium temporibus reiciendis laborum enim fugit nihil repellat sequi molestias eos quidem illo 
              eveniet, aliquam id impedit doloribus!</div>
          </Col>
          <Col sm={5}>
          <img src="https://picsum.photos/id/17/526/160"/><br /><br /><br />
          </Col>
      </Row>
      </Container>
      
      <Row className='bckgrnd'>
        <Col className='sec-bet'>
          <br />
          <BsFillBasket2Fill className='ico' /><br />
          <h2>+150K Order</h2>

        </Col>
        <Col className='sec-bet'>
          <br />
          <BsShareFill className='ico' /><br />
          <h2>1 Million+ Share on Web</h2>
          <br />
        </Col>
        <Col className='sec-bet'>
          <br />
          <BsStack className='ico' /><br />
          <h2>3000+ Products</h2>
        </Col>
      </Row>
      
      <Row className='bckgrnd'>
        <Col className='sec-bet'>
        <div className='x'> <BsFill7SquareFill className='ico'/> <BsArrowDownLeft  className='ico'/> <BsFill2CircleFill className='ico'/> <BsFill4CircleFill className='ico'/> </div>
        <br />
        <HiStatusOnline className='ico'/>
        
        <h2>We are always here!</h2>
        </Col>

        <Col className='sec-bet'>
          <br />
          <RiRefund2Line className='ico'/>
          <br /><br />
          <h2>30 Days Guarentee</h2>
         
        </Col>
      </Row>
      <Footer/>
    </>
  )
}

export default Hakkimizda