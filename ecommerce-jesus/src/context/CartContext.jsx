import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Lógica para obtener el carrito desde el almacenamiento local, si existe
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Guardar el carrito en el almacenamiento local cuando cambie
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Si existe, actualiza la cantidad
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // Si no existe, agrega el producto al carrito
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    // Remover un producto del carrito
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updatedCart);
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    // Actualizar la cantidad de un producto en el carrito
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    // Limpiar todo el carrito
    setCart([]);
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart,
        totalQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
