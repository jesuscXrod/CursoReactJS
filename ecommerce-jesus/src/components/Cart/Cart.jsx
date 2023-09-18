import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";


const Cart = () => {
  const { cart, totalQuantity } = useContext(CartContext);

  // Calcula el total sumando los subtotales de los elementos en cart
  const totalPaid = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const formattedTotal = totalPaid.toFixed(2);

  // Renderiza un mensaje si el carrito está vacío
  const emptyCartMessage = totalQuantity === 0 ? (
    <div>
      <h1>No hay productos en el carrito de compras</h1>
      <Link className="waves-effect waves-light btn-large" to="/">Productos</Link>
    </div>
  ) : null;

  return (
    <div>
      {emptyCartMessage}
      {cart.length > 0 && (
        <div className="cart-container">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3>Total: ${formattedTotal}</h3>
          <Link className="waves-effect waves-light btn-large" to="/order">Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;