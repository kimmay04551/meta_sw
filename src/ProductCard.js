import React from "react";

const ProductCard = ({ product, buttonText, onButtonClick, disabled }) => {
  return (
    <div className="product-card" style={{ backgroundColor: product.bgColor }}>
      <img
        src={product.image}
        alt={product.brand}
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.brand}</h3>
        <p>{product.description}</p>
        <p className="price">{product.price.toLocaleString()}원</p>
        <button
          onClick={onButtonClick}
          disabled={disabled}
          className="btn"
          style={disabled ? { backgroundColor: "#ccc", cursor: "default" } : {}}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
