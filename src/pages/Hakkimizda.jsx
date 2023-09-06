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
        <Col sm={7}>
          <Placeholder sm={12} bg="success"></Placeholder>
          <img src="https://picsum.photos/id/17/745/160" alt="" />
        </Col>
        <Col sm={5}>
          <Placeholder sm={12} bg="danger"></Placeholder>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default Hakkimizda