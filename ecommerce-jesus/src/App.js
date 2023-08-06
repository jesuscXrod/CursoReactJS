import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola, bienvenido a nuestra tienda de videojuegos!" />
    </div>
  );
};

export default App;
