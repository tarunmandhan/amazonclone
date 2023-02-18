import React from "react";
import "./Product.css";

function Product({ id, tittle, image, price, rating }) {
  return (
    <>
      <div className="product">
        <div className="product__info">
          <p>{tittle}</p>
          <p className="product__price">
            <small>₨</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
          <img src={image} alt="" />
          <button>Add to basket </button>
        </div>
      </div>
    </>
  );
}

export default Product;
