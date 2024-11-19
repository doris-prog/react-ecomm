import React from "react";
import { useCart } from "./CartStore";
import { useFlashMessage } from "./FlashMessageStore";
import { useLocation } from "wouter";

  const ProductCard=(props)=>{

  const { addToCart } = useCart();
  const [, setLocation] = useLocation();
  const { showMessage } = useFlashMessage();

  const handleAddToCart = () => {
    addToCart(props);
    setLocation('/cart');
    showMessage('Item added to cart', 'success');
  };

  return (
      <div className="card">
        <img
          src={props.imageUrl}
          className="card-img-top"
          alt={props.productName}
        />
        <div className="card-body">
          <h5 className="card-title">{props.productName}</h5>
          <p className="card-text">${props.price}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
  );
};

export default ProductCard;

