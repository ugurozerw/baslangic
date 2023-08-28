import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './products.css';

const VeriCekmeComponent = () => {
  const [veri, setVeri] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setVeri(data);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const UrunKarti = ({ item }) => {
    return (
      <Col key={item.id} className="mb-4">
        <Card className="urun-karti">
          <Card.Img src={item.image} alt={item.title} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <div className="aciklama">
              <p>{item.description}</p>
            </div>
            <Card.Text>Fiyat: {item.price} TL</Card.Text>
            <button className="btn btn-primary">Sepete Ekle</button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container>
      <h1 className="my-4">Ürünler</h1>
      <Row xs={1} md={3} className="urun-kartlari">
        {veri.map(item => (
          <UrunKarti key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default VeriCekmeComponent;
