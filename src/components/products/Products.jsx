import React, { useState, useEffect } from 'react';
import './products.css'; // Diğer stilleri burada ekleyin

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
    // İçerik uzunluğuna göre sınıf eklemesi yap
    const kartSinifi = item.title.length > 50 ? 'urun-karti kucuk-icerik' : 'urun-karti';

    return (
      <div className={kartSinifi}>
        <img src={item.image} alt={item.title} />
        <div className="icerik">
          <h2>{item.title}</h2>
          <p className="fiyat">Fiyat: {item.price} TL</p>
          <button>Sepete Ekle</button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-semibold mb-4">Ürünler</h1>
      <div className="kartlar">
        {veri.map(item => (
          <UrunKarti key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default VeriCekmeComponent;
