import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const categorias = ['Accion', 'Aventuras', 'Estrategias', 'Indie', 'Shooters', 'Plataforma', 'Simuladores'];

  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo" to={`/`}>GameStore</Link>
        <ul className="right hide-on-med-and-down">
          {categorias.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
          <li><CartWidget /></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;