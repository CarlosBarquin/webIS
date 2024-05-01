import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import Script from 'next/script';

const IconButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TopBar = styled.div`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBar = styled.nav`
  background-color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);

  a {
    margin-right: 15px;
    text-decoration: none;
    color: black;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Logo = styled.img`
  height: 50px;
  cursor: pointer; /* Agrega un cursor de apuntador para indicar que es clickeable */
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Header = () => (
  <>
    <Script type="text/javascript" async src="//cdn.evgnet.com/beacon/partnerthecocktailspain/cbarquin/scripts/evergage.min.js"></Script>
    <TopBar>
      <div>
             
      </div>
      <div>
        <IconButton href="#">
          <FontAwesomeIcon icon={faUser} />
          Registrarse
        </IconButton>
        <IconButton href="#">
          <FontAwesomeIcon icon={faShoppingCart} />
          Carrito
        </IconButton>
      </div>
    </TopBar>
    <NavBar>
      <Link href="/homepage">
        <Logo src="https://graphicdesignbylisa.com/wp-content/uploads/generic-logo.jpg" alt="logo" />
      </Link>
      <div>
        <Link href="#">Inicio</Link>
        <Link href="#">Productos</Link>
        <Link href="#">Nosotros</Link>
        <Link href="#">Contacto</Link>
      </div>
      <SearchInput type="text" placeholder="Buscar..."/>
    </NavBar>
  </>
);

export default Header;
