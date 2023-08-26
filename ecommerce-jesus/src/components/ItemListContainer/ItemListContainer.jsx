import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await fetch('/data/productos.json');
        const juegos = await response.json();

        const filteredGames = juegos.filter(product => product.category === category);

        if (filteredGames.length > 0) {
          setVideojuegos(filteredGames);
        } else {
          setVideojuegos(juegos);
        }
      } catch (error) {
        console.error('Error al cargar los juegos', error);
      }
    }

    getGames();
  }, [category]);

  return (
    <div>
      <h1>Catalogo de videojuegos</h1>
      <div className="row">
        {videojuegos.map(juego => (
          <div key={juego.id} className="col s12 m3">
            <div className="card">
              <div className="card-image">
                <img className="image" src={juego.imagen} alt={juego.titulo} />
                <span className="card-title">{juego.titulo}</span>
                <Link to={`/item/${juego.id}`} className="btn-floating halfway-fab waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </Link>
              </div>
              <div className="card-content">
                <p>Precio: ${juego.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;