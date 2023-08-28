import React from 'react';
import './RightColumn1Items.css'; // CSS dosyasını import edin

const RightColumn1Items = () => {
  return (
    <div className="button-container">
      <button className="sort-btns">Yeni Çikanlar</button>
      <button className="sort-btns">İndirimler</button>
      <button className="sort-btns">En ucuzdan sırala</button>
      <button className="sort-btns">En pahalıdan sırala</button>
      <button className="sort-btns">Lorem ipsum dolor sit amet.</button>
      <button className="sort-btns">Lorem ipsum</button>
    </div>
  );
}

export default RightColumn1Items;
