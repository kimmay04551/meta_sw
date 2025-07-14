import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <section className="box">
      <header className="box-header">
        <span>상품 목록</span>
        <div className="icon">🛒</div>
      </header>
      <p>현재 {products.length}개의 상품이 있습니다.</p>
      <div className="card-list">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            buttonText="담기"
            onButtonClick={() => addToCart(p)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
