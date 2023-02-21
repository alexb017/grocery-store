import { useEffect, useState } from 'react';
import Product from './Product';
import Loader from './Loader';

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://grocery-store-8b1cb-default-rtdb.firebaseio.com/products.json'
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          setLoading(false);
        }
        setLoading(false);
        setProducts(data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div className="products">
      <h1>Products</h1>
      <div className="products-content">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
              cart={props.cart}
            />
          );
        })}
      </div>
    </div>
  );
}
