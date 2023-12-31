import { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);


  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to='/cart' className="cart-widget" style={{ display: totalQuantity > 0 ? 'flex' : 'none' }}>
      <i className="material-icons">shopping_cart</i>
      <span className="cart-notification">{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
