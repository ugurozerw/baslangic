import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './products.css'; // CSS dosyasını ekleyin

function VeriCekmeComponent() {
  const [veri, setVeri] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setVeri(data);
      })
      .catch(error => {
        console.error('Veri çekme hatası:', error);
      });
  }, []);

  return (
    <Container>
      <h1 className="my-4">Ürünler</h1>
      <Row xs={1} md={3} className="urun-kartlari"> {/* CSS class ekleyin */}
        {veri.map(item => (
          <Col key={item.id} className="mb-4">
            <Card className="urun-karti"> {/* CSS class ekleyin */}
              <Card.Img src={item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Card.Text>Fiyat: {item.price} TL</Card.Text>
                <button className="btn btn-primary">Sepete Ekle</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default VeriCekmeComponent;
