import Head from 'next/head';
import styled from 'styled-components';
import { Button } from './homepage'; // Asumiendo que exportas estos componentes desde index.tsx
import Header from '@/components/Header';
import Script from 'next/script'

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


export default function Producto() {
  return (
    <>
     <Script type="text/javascript" async src="//cdn.evgnet.com/beacon/partnerthecocktailspain/cbarquin/scripts/evergage.min.js"></Script>
       <Head>
        <title>Web Store</title>
      </Head>
      <Header />
      <ProductContainer>
        <ProductImage src="https://c8.alamy.com/compes/e16we6/converse-all-star-chuck-taylor-en-blanco-y-negro-chuck-taylor-all-stars-lona-y-zapatos-de-goma-zapatillas-de-baloncesto-e16we6.jpg" alt="Zapatillas Deportivas" />
        <ProductDetails>
          <ProductTitle>Zapatillas Deportivas</ProductTitle>
          <ProductDescription>Descripción del producto describe este produto pls pls describelo pls .</ProductDescription>
          <ProductPrice>$99.99</ProductPrice>
          <Button>Añadir al Carrito</Button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}
