import './MenuPrivate.css';
import { Link } from 'react-router';
const Menu = () => {
  return (
    <nav className="barra-navegacion">
      <div className="logo-nombre">
        <img src="public/logo.png" alt="Logo" />
        <span className="titulo-pasteleria">Deli Pan</span>
      </div>

      <ul className="menu-opciones">
        <li><Link to="/dashboard">Inicio</Link></li>
        <li><Link to="/buscarcliente">Clientes</Link></li>
        <li><Link to="/buscarproducto">Productos</Link></li>
        <li><Link to="/">Salir</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
