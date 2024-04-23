import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import styled from 'styled-components';


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


const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const ProductsContainer = styled.div`
  padding: 0 20px; 
`;

const CenteredProducts = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center; 
`;

const ProductCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-rows: 1fr auto auto auto auto; 
  gap: 10px; 
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 5px;
  grid-row: 1; 
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin: 0; 
  grid-row: 2; 
`;

const ProductDescription = styled.p`
  font-size: 14px;
  margin: 0; 
  grid-row: 3; 
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0; 
  grid-row: 4; 
`;


const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://backendis-nodejs.onrender.com/api/products')
      .then(response => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <Header />
      <Title>Explore Our Products</Title>
      <ProductsContainer>
        <CenteredProducts>
          <ProductGrid>
            {products.map(product => (
              <ProductCard key={product._id}>
                <ProductImage src={product.img} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>${product.price}</ProductPrice>
              </ProductCard>
            ))}
          </ProductGrid>
        </CenteredProducts>
      </ProductsContainer>
    </Container>
  );
};

export default ProductsPage;
