import React, { useState } from "react";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    brand: "브랜드A",
    description: "편안하고 착용감이 좋은 신발",
    price: 35000,
    image: "/images/shoes_1.png",
  },
  {
    id: 2,
    brand: "브랜드A",
    description: "힙한 컬러가 매력적인 신발",
    price: 25000,
    image: "/images/shoes_2.png",
  },
  {
    id: 3,
    brand: "브랜드B",
    description: "편안하고 착용감이 좋은 신발",
    price: 35000,
    image: "/images/shoes_3.png",
  },
  {
    id: 4,
    brand: "브랜드B",
    description: "힙한 컬러가 매력적인 신발",
    price: 35000,
    image: "/images/shoes_4.png",
  },
  {
    id: 5,
    brand: "브랜드C",
    description: "편안하고 착용감이 좋은 신발",
    price: 35000,
    image: "/images/shoes_5.png",
  },
  {
    id: 6,
    brand: "브랜드C",
    description: "힙한 컬러가 매력적인 신발",
    price: 35000,
    image: "/images/shoes_6.png",
  },
];

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.brand} className="product-image" />
      <div className="product-info">
        <h3>{product.brand}</h3>
        <p>{product.description}</p>
        <p className="price">{product.price.toLocaleString()}원</p>
        <button className="btn" onClick={() => onAdd(product.id)}>
          담기
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (id) => {
    setCartCount((count) => count + 1);
  };

  return (
    <div className="container">
      {}
      <header className="header">
        <div className="cart-icon">
          🛒 <span className="cart-count">{cartCount}</span>
        </div>
      </header>

      <div className="card-list">
        {initialProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
