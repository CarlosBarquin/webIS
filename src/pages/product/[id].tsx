import { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '@/components/Header';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';

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
  max-width: 30%;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const ProductID = styled.p`
  color: #666;
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
  background-color: #6dccee;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s, color 0.3s;
  max-width: 30%;
  
  &:hover {
    background-color: #609cb4;
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
      <div className="page" data-action="Product-Show" data-querystring={`pid=${id}`}>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header />
      <ProductContainer>
        <ProductImage className="ImgURL" src={product.img} alt={product.name} />
        <ProductDetails>
          <ProductID className="ProductID" >{product._id}</ProductID>
          <ProductTitle className="ProductName" >{product.name}</ProductTitle> <br />
          <ProductDescription className="ProductDescription" >{product.description}</ProductDescription>
          <ProductPrice className="ProductPrice" >${product.price}</ProductPrice>
          <Button className="Add-To-Cart" >Add to Cart</Button>
        </ProductDetails>
      </ProductContainer>
      <Footer />
      </div>

      
    </>
  );
};

export default ProductDetailsPage;
