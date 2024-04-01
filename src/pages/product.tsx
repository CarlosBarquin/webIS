import Head from 'next/head';
import styled from 'styled-components';
import { TopBar, NavBar, Logo, Button, SearchInput } from './index'; // Asumiendo que exportas estos componentes desde index.tsx

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const ProductImage = styled.img`
  max-width: 50%;
  height: auto;
  margin-right: 20px;
`;

const ProductDetails = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h2`
  margin: 0;
`;

const ProductDescription = styled.p`
  color: #666;
`;

const ProductPrice = styled.p`
  font-weight: bold;
`;

// Reutiliza el Button de index.tsx si es adecuado para tu diseño

export default function Producto() {
  return (
    <>
       <Head>
        <title>Web Store</title>
      </Head>
      <TopBar>
        <div></div>
        <div>
          <a href="#">Carrito</a>
          <a> </a> 
          <a href="#">Registrarse</a>
        </div>
      </TopBar>
      <NavBar>
        <Logo src="https://graphicdesignbylisa.com/wp-content/uploads/generic-logo.jpg" alt="logo" />
        <div>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>
        </div>
        <SearchInput type="text" placeholder="Buscar..."/>
      </NavBar>
      <ProductContainer>
        <ProductImage src="https://c8.alamy.com/compes/e16we6/converse-all-star-chuck-taylor-en-blanco-y-negro-chuck-taylor-all-stars-lona-y-zapatos-de-goma-zapatillas-de-baloncesto-e16we6.jpg" alt="Zapatillas Deportivas" />
        <ProductDetails>
          <ProductTitle>Zapatillas Deportivas XYZ</ProductTitle>
          <ProductDescription>Descripción del producto describe este produto pls pls describelo pls .</ProductDescription>
          <ProductPrice>$99.99</ProductPrice>
          <Button>Añadir al Carrito</Button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}
