import Header from '@/components/Header';
import Link from 'next/link';
import Script from 'next/script';
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

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0; 
  grid-row: 4; 
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 10%;
`;

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch('https://backendis-nodejs.onrender.com/api/products/female') 
      .then(response => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Script type="text/javascript" async src="//cdn.evgnet.com/beacon/partnerthecocktailspain/cbarquin/scripts/evergage.min.js"></Script>
      <Container>
        <Header />
        <Title>Explore Our Female's Products</Title> 
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ProductsContainer>
          <CenteredProducts>
            <ProductGrid>
              {filteredProducts.map(product => (
                <ProductCard key={product._id}>
                  <ProductImage src={product.img} alt={product.name} />
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>${product.price}</ProductPrice>
                  <Link href={`/product/${product._id}`}>View Details</Link>
                </ProductCard>
              ))}
            </ProductGrid>
          </CenteredProducts>
        </ProductsContainer>
      </Container>
    </>
  );
};

export default ProductsPage;
