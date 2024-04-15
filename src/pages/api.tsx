
import { useEffect, useState } from 'react';


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

  useEffect(() => {
    fetch('https://backendis-nodejs.onrender.com/api/products')
      .then(response => response.json())
      .then((data: Product[]) => setProducts(data)) 
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Gender: {product.gender}</p>
          <p>Type: {product.type}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
