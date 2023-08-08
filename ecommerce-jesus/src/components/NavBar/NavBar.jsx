import './NavBar.css';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const categorias = ['Acción', 'Aventuras', 'Estrategias', 'Indie', 'Shooters', 'Plataforma', 'Simuladores'];

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">Tienda Virtual</a>
        <ul className="right hide-on-med-and-down">
          {categorias.map((category, index) => (
            <li key={index}><a href="#!">{category}</a></li>
          ))}
          <li><CartWidget /></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
