import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function Home() {

    /* const handleProductClick = (product: Product) => {
   
    localStorage.setItem('currentProduct', JSON.stringify(product));
    
    router.push(`/${product.ID}`);
  }; */

  const recommendedProducts = [
    {
      id: 1,
      name: "Placeholder 1",
      imageSrc: "https://m.media-amazon.com/images/I/41M7rbtSTOL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "Placeholder 2",
      imageSrc: "https://m.media-amazon.com/images/I/618TyCSFJ1L._AC_UY900_.jpg"
    },
  ];

  return (
    <>
    <Script type="text/javascript" async src="//cdn.evgnet.com/beacon/partnerthecocktailspain/cbarquin/scripts/evergage.min.js"></Script>
      <Head>
        <title>Web Store</title>
      </Head>
      <Header />
      <div className="ContentZone">
        <img className="MainIMG" src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg" alt="Background Image" />
        <div className="TextIMG">
          Aventúrate al aire libre
          <br />
          <a href={'products'}><button className="MainButton">Explorar</button></a>
        </div>
      </div>
      <div className="ContentZone2">
        <h2 style={{ color: "black", display: "flex", justifyContent: "center",  }}>Productos Recomendados</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", color: "black" }}>
          {recommendedProducts.map((product) => (
            <div key={product.id} className="RecommendedProduct">
              <a>
                <img className="IMG2" src={product.imageSrc} alt={product.name} />
              </a>
              <h3 className="ProductName">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <br /> <br /> 
      <Footer />
    </>
  );
}
