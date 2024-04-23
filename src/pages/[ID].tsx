import { useEffect, useState } from 'react';
import { Product } from './homepage';
import Head from 'next/head';
import styled from 'styled-components';
import { Button } from './homepage';
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


const ProductDetailsPage = () => {
    const [product, setProduct] = useState<Product>();
  
    useEffect(() => {
    
      const productData = localStorage.getItem('currentProduct');
      if (productData) {
        setProduct(JSON.parse(productData));
      }
    }, []);
  
    if (!product) {
      return <p>No hay datos del producto disponibles.</p>;
    }
  
    return (
      <>
       <Script type="text/javascript" async src="//cdn.evgnet.com/beacon/partnerthecocktailspain/cbarquin/scripts/evergage.min.js"></Script>
        <Head>
          <title>{product.name}</title>
        </Head>
        <Header />
        <ProductContainer>
          <ProductImage src={product.imageSrc} alt={product.name} />
          <ProductDetails>
            <ProductDescription>{product.ID}</ProductDescription>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
            <Button>Añadir al Carrito</Button>
          </ProductDetails>
        </ProductContainer>
      </>
    );
  };
  
  export default ProductDetailsPage;