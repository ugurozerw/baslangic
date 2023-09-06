import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Placeholder } from 'react-bootstrap';

const Hakkimizda = () => {
  return (
    <>
    <CustomNavbar></CustomNavbar>

    <Container>
      <Row>
        <Col><div>Hakkımızda</div></Col>
      </Row>

    

      <Row>
          <Col sm={7}>
            <Placeholder sm={12} bg="success"></Placeholder>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reiciendis voluptatum, at possimus incidunt 
              laudantium nesciunt placeat ad hic debitis autem voluptatibus sint quaerat delectus temporibus qui quis animi 
              non blanditiis quos. Autem quidem dolor atque amet veritatis et quod architecto incidunt necessitatibus consectetur 
              soluta, in, nemo nostrum animi quasi officiis? Repellendus natus cupiditate corrupti? Facere esse commodi distinctio. 
              Autem veritatis eum doloribus debitis, obcaecati quae impedit eligendi quo? Natus esse et magnam a iste officia error
              corporis praesentium temporibus reiciendis laborum enim fugit nihil repellat sequi molestias eos quidem illo 
              eveniet, aliquam id impedit doloribus!</div>
          </Col>
          <Col sm={5}>
            <Placeholder sm={12} bg="danger"></Placeholder>
            <img src="https://picsum.photos/id/17/526/160" alt="" />
          </Col>
      </Row>
    </Container>
    </>
  )
}

export default Hakkimizda