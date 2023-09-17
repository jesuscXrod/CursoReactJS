import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/client';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Item from '../Item/Item';

const ItemListContainer = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const { category } = useParams();
  const productsRef = collection(db, "products");

  const getProductsByCategory = async () => {
    try {
      const q = query(productsRef, where("categoryId", "==", category));
      const data = await getDocs(q);
      const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setVideojuegos(dataFiltrada);
    } catch (error) {
      console.error('Error al obtener los productos por categoría', error);
    }
  };

  const getProducts = async () => {
    try {
      const data = await getDocs(productsRef);
      const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setVideojuegos(dataFiltrada);
    } catch (error) {
      console.error('Error al obtener los productos', error);
    }
  };

  useEffect(() => {
    category ? getProductsByCategory() : getProducts();
  }, [category]);

  return (
    <div>
      <h1>Catalogo de videojuegos</h1>
      <div className="row">
        {videojuegos.map((juego) => (
          <Item key={juego.id} juego={juego} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;