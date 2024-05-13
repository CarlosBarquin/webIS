
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="topBar">
        <div className="navegador">
          
        </div>
        <div>
          <a href="#" className="iconButton">
            <FontAwesomeIcon icon={faUser} />  
            Registrarse
          </a>
          <a href="#" className="iconButton">
            <FontAwesomeIcon icon={faShoppingCart} />
            Carrito
          </a>
        </div>
      </div>
      <nav className="navBar">
        <a href="/homepage" className="logo">
          <img  className="logo" src="https://graphicdesignbylisa.com/wp-content/uploads/generic-logo.jpg" alt="logo" />
        </a>
        <div className="menuContainer">
          <div className="navItem">
            <a href="#">Inicio</a>
          </div>
          <div className="navItem"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">Productos</a>
            <div className={`dropdownMenu ${isDropdownOpen ? 'open' : ''}`}>
              <div className="dropdownItem">
                <a href="/products/men">Hombres</a>
              </div>
              <div className="dropdownItem">
                <a href="/products/women">Mujeres</a>
              </div>
            </div>
          </div>
          <div className="navItem">
            <a href="#">Nosotros</a>
          </div>
          <div className="navItem">
            <a href="#">Contacto</a>
          </div>
        </div>
        <input type="text" className="searchInput" placeholder="Buscar..." />
      </nav>
    </>
  );
};

export default Header;
