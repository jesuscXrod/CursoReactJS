import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ detail }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const { id, title, price, image } = detail;

    const item = {
      id,
      title,
      price,
      image
    };

    addItem(item, quantity);
  };

  return (
    <>
      <div key={detail.id} className="col">
        <div className="detail-card">
          <div className="card-image">
            <img className="detail-image" src={detail.image} alt={detail.title} />
          </div>
          <div className="detail-card-content">
            <div className="detail-card-title">
              <h2>{detail.title}</h2>
            </div>
            <div className='detail-description'>
              <p><span>Descripción:</span> {detail.description}</p>
              <p><span>Precio:</span> ${detail.price}</p>
              <p><span>Stock:</span> {detail.stock}</p>
              <div>
                {
                  quantityAdded > 0 ? (
                    <Link className='waves-effect waves-light btn-large' to='/cart'>Chequear el carrito</Link>
                  ) : (
                    <ItemCount initial={1} onAdd={handleOnAdd} />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;