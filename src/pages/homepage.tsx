import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Header from '@/components/Header';
import router, { useRouter } from 'next/router';
import Script from 'next/script'

const ContentZone = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 600px;
  opacity: 0.7;
`;

const TextOverImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const RecommendedProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%; 
  margin-left: 50px;
  margin-right: 50px;
`;

const ProductName = styled.h3`
  margin-top: 10px;
`;

const recommendedProducts = [
  {
    id: 1,
    ID : "IEEE2134",
    name: "Producto 1",
    imageSrc: "https://m.media-amazon.com/images/I/41M7rbtSTOL._AC_UF894,1000_QL80_.jpg",
    description: "eopgesjiogsgpodrhjodirthjdfthrjkt",
    price : 22

  },
  {
    id: 2,
    ID : "IEEE7585",
    name: "Producto 2",
    imageSrc: "https://m.media-amazon.com/images/I/618TyCSFJ1L._AC_UY900_.jpg",
    description: "eopgesjiogsgpodrhjodirthjdfthrjkt",
    price : 99.99

  },

];

export type Product = {
  id: number;
  ID: string;
  name: string;
  imageSrc: string;
  description: string;
  price: number;
};

export default function Home() {

  const handleProductClick = (product: Product) => {
   
    localStorage.setItem('currentProduct', JSON.stringify(product));
    
    router.push(`/${product.ID}`);
  };

  return (
    <>
      <Script type="text/javascript" async src="//cdn.evgnet.com/beacon/partnerthecocktailspain/cbarquin/scripts/evergage.min.js"></Script>
      <Head>
        <title>Web Store</title>
      </Head>
      <Header />
      <ContentZone>
        <BackgroundImage src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg" alt="Background Image" />
        <TextOverImage>
          Aventúrate al aire libre
          <br></br>
          <Link href={'product'}><Button>Explorar</Button></Link>
        </TextOverImage>
      </ContentZone>

      <ContentZone>
  <h2 style={{color: "black"}}>Productos Recomendados</h2>
  <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", color: "black" }}>
  {recommendedProducts.map((product) => (
  <RecommendedProduct key={product.id} onClick={() => handleProductClick(product)}>
    <a>
      <ProductImage src={product.imageSrc} alt={product.name} />
    </a>
    <ProductName>{product.name}</ProductName>
  </RecommendedProduct>
    ))}
  </div>
  </ContentZone>

    </>
  );
};
