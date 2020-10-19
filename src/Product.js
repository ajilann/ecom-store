import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* fill method syntax fill(1, 2, 4) means // fill with 1 from position 2 until position 4   */}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img alt=" product1" src={image} />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
