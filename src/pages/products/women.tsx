import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import Script from 'next/script';

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
      <Head>
        <title>Explore Our Female's Products</title>
      </Head>
      <div className="Container">
        <Header />
        <h1 className="TITLE">Explore Our Products</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="SearchInput"
        />
        <div className="ProductsContainer">
          <div className="CenteredProducts">
            <div className="ProductGrid">
              {filteredProducts.map(product => (
                <div key={product._id} className="ProductCard">
                  <img className="ProductImage" src={product.img} alt={product.name} />
                  <h3 className="ProductName">{product.name}</h3>
                  <p className="ProductPrice">${product.price}</p>
                  <a href={`/product/${product._id}`}>View Details</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default ProductsPage;
