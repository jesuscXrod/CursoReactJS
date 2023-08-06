import './CartWidget.css';
import React from 'react';

const CartWidget = () => {

  return (
    <div className="cart-widget">
      <i className="material-icons">shopping_cart</i>
      <span className="cart-notification">1</span>
    </div>
  );
};

export default CartWidget;
