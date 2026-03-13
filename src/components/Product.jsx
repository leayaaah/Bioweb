import React from 'react';
import './Product.css';

export default function Product({ name, image, link }) {
  return (
    <div className="product-item">
      <img src={image} alt={name} className="product-img" />
      <span className="product-name">{name}</span>
      <a href={link} target="_blank" rel="noopener noreferrer" className="buy-btn">
        Mua Ngay
      </a>
    </div>
  );
}