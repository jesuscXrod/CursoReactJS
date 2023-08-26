import './CartWidget.css';

const CartWidget = () => {

  return (
    <div className="cart-widget">
      <i className="material-icons">shopping_cart</i>
      <span className="cart-notification">0</span>
    </div>
  );
};

export default CartWidget;
