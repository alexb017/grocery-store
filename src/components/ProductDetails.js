import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const params = useParams();
  const { cart } = props;

  const productCart = cart.find((product) => product.id === params.id);
  const quantity = productCart ? productCart.quantity : 0;

  useEffect(() => {
    fetch(
      `https://grocery-store-8b1cb-default-rtdb.firebaseio.com/productsDetails/id${params.id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log('Could not load product details', error));
  }, []);

  return (
    <div className="product-details">
      <div className="product-details-content">
        <div className="product-details-image">
          <img
            src={product.image}
            width="500"
            height="500"
            alt={product.name}
          />
        </div>
        <div className="product-details-right">
          <div className="product-details-info">
            <div className="product-details-category-top">
              <p className="product-details-category">{product.category}</p>
              <div className="product-details-favorite">
                <button type="button" className="btn-favorite">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12.82 5.58-.82.822-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599 5.38 5.38 0 0 0-7.611 0Zm6.548 6.54L12 19.485 4.635 12.12a3.875 3.875 0 1 1 5.48-5.48l1.358 1.357a.75.75 0 0 0 1.073-.012L13.88 6.64a3.88 3.88 0 0 1 5.487 5.48Z" />
                  </svg>
                </button>
              </div>
            </div>
            <p>{product.food_condition}</p>
            <h1>{product.name}</h1>
            <h3>
              ${product.price} <span>per kg</span>
            </h3>
            <div className="product-btns">
              {quantity === 0 ? (
                <button
                  type="button"
                  className="product-btn-add"
                  onClick={() => props.onProductAdd(product)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z" />
                  </svg>
                  Add to cart
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="product-btn-add"
                    onClick={() => props.onProductDelete(product.id)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.997 13H20a1 1 0 1 0 0-2H3.997a1 1 0 1 0 0 2Z" />
                    </svg>
                  </button>
                  <strong>{quantity}</strong>
                  <button
                    type="button"
                    className="product-btn-add"
                    onClick={() => props.onProductAdd(product)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="product-details-info-bottom">
            <p className="product-details-info-title">About this product</p>
            <div className="product-details-nutritions">
              <ul>
                <li>
                  Calories: <span>{product.nutritions?.calories}</span>
                </li>
                <li>
                  Carbohydrates:{' '}
                  <span>{product.nutritions?.carbohydrates}</span>
                </li>
                <li>
                  Fiber: <span>{product.nutritions?.fiber}</span>
                </li>
                <li>
                  Vitamin C: <span>{product.nutritions?.vitamin_c}</span>
                </li>
              </ul>
            </div>
            <p className="product-details-description">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
