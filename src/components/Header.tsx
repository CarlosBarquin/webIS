import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

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
  align-items: stretch;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  height: 50px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  height: 60%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-grow: 1;  
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  position: relative; 

  a {
    display: flex;
    align-items: center;
    height: 140%;
    padding: 0 15px;
    text-decoration: none;
    color: black;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

type DropdownMenuProps = {
  open: boolean;
};

const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  top: 120%;
  width: 100%;
  text-align: center;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  z-index: 1;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const DropdownItem = styled.div`
  padding: 3px;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

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
        <MenuContainer>
          <NavItem>
            <Link href="#">Inicio</Link>
          </NavItem>
          <NavItem
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#">Productos</Link>
            <DropdownMenu open={isDropdownOpen}>
              <DropdownItem>
                <Link href="/products/men">Hombres</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/products/women">Mujeres</Link>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <Link href="#">Nosotros</Link>
          </NavItem>
          <NavItem>
            <Link href="#">Contacto</Link>
          </NavItem>
        </MenuContainer>
        <SearchInput type="text" placeholder="Buscar..." />
        
      </NavBar>
    </>
  );
};

export default Header;
