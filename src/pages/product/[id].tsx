import { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '@/components/Header';
import Script from 'next/script';
import { useRouter } from 'next/router';

type Product = {
  _id: string;
  ID: string;
  name: string;
  img: string;
  description: string;
  price: number;
  gender: string;
  type: string;
};

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 700px; 
  height: auto; 
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductDetails = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const ProductDescription = styled.p`
  color: #666;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query; 
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://backendis-nodejs.onrender.com/api/product/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error('Error fetching product data:', error));
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <Script type="text/javascript" async src="//cdn.evgnet.com/beacon/partnerthecocktailspain/cbarquin/scripts/evergage.min.js"></Script>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header />
      <ProductContainer>
        <ProductImage src={product.img} alt={product.name} />
        <ProductDetails>
          <ProductDescription>{product.ID}</ProductDescription>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>${product.price}</ProductPrice>
          <Button>Add to Cart</Button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
};

export default ProductDetailsPage;
