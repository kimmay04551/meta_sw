import React from "react";
import ProductCard from "./ProductCard";

const CartList = ({ products }) => {
  return (
    <section className="box">
      <header className="box-header">
        <span>상품 목록 장바구니 담김</span>
        <div className="icon">
          🛒<span className="cart-count">{products.length}</span>
        </div>
      </header>
      <p>현재 {products.length}개의 상품이 있습니다.</p>
      <div className="card-list">
        {products.length > 0 ? (
          products.map((p) => (
            <ProductCard key={p.id} product={p} buttonText="담김" disabled />
          ))
        ) : (
          <p>장바구니가 비었습니다.</p>
        )}
      </div>
    </section>
  );
};

export default CartList;
