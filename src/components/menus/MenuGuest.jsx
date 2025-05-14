import './MenuGuest.css';
import { Link } from 'react-router';

const MenuGuest = () => {
  return (
    <nav className="barra-navegacion">
      <div className="logo-nombre">
        <img src="public/logo.png" alt="Logo" />
        <span className="titulo-pasteleria">Deli Pan</span>
      </div>

      <ul className="menu-opciones">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/aboutus">Quiesnes somos</Link></li>
        <li><Link to="/registration">Registrarme</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default MenuGuest;
