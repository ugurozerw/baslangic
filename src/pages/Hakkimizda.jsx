import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./css/hakkimizda.css"

const Hakkimizda = () => {
  return (
    <>
    <CustomNavbar></CustomNavbar>

    <Container>
      <Row>
        <Col className='marg-top'><h1>Hakkımızda</h1></Col>
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
          <img src="https://picsum.photos/id/17/526/160"/>

          </Col>
      </Row>
      </Container>
      
      <Row className='sec-bet'>
        <Col><h2>+150K Order</h2></Col>
        <Col><h2>1 Million Share on Web</h2></Col>
        <Col><h2>3000 Products</h2></Col>

        <ul>
          <li>Madde 1</li>
          <li>Madde 2</li>
          <li>Madde 3</li>
          <li>Madde 4</li>
          <li>Madde 5</li>
        </ul>

        <ul>
          <li>Madde 1</li>
          <li>Madde 2</li>
          <li>Madde 3</li>
          <li>Madde 4</li>
          <li>Madde 5</li>
        </ul>

        <ul>
          <li><h5>Madde 1</h5></li>
          <li>Madde 2</li>
          <li>Madde 3</li>
          <li>Madde 4</li>
          <li>Madde 5</li>
        </ul>
      </Row>

      <Row>
        <div>

          a
          <br /><br /><br /><br />
          a
          <br /><br /><br /><br />
          a

        </div>
      </Row>
    
    </>
  )
}

export default Hakkimizda