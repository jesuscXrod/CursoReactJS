import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ juego }) => {
  
  return (
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img className="image" src={juego.image} alt={juego.title} />
          <span className="card-title">{juego.title}</span>
          <Link to={`/item/${juego.id}`} className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">add</i>
          </Link>
        </div>
        <div className="card-content">
          <p>Precio: ${juego.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;