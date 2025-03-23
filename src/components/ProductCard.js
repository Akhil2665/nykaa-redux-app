import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.discountPercent > 0 && (
          <span className="discount-tag">{product.discountPercent}% OFF</span>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-brand">{product.brand}</h3>
        <h4 className="product-name">{product.name}</h4>
        <div className="product-price">
          <span className="final-price">₹{product.price}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">₹{product.originalPrice}</span>
          )}
        </div>
        <div className="product-rating">
          <span className="rating">{product.rating} ★</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
