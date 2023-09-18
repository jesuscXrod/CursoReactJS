import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import '../Cart/Cart.css'

const CartItem = ({ item }) => {
  const { updateItemQuantity, removeItem } = useContext(CartContext);

  const handleQuantityChange = (newQuantity) => {
    // Evitar que la cantidad sea menor que 1
    if (newQuantity < 1) {
      removeItem(item.id);
    } else {
      updateItemQuantity(item.id, newQuantity);
    }
  };

  const handleRemoveItem = () => {
    removeItem(item.id);
  };


  return (
    <div className="cart-item">
      <table>
        <thead>
          <tr>
              <th>Imagen</th>
              <th>Nombre del producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="card-image cart-item-image"><img className="detail-image" src={item.image} alt={item.title} /></td>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <div className="cart-item-actions">
              <button className="waves-effect waves-light btn-small" onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
              <button className="waves-effect waves-light btn-small" onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
              <button className="waves-effect waves-light btn-small left-margin" onClick={handleRemoveItem}>Eliminar</button>
            </div>
          </tr>
        </tbody>
      </table>
    </div>

    
  );
};

export default CartItem;
