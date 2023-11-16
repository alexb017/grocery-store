import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import RelatedProducts from './RelatedProducts';

export default function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { cart } = props;

  useEffect(() => {
    fetch(
      `https://grocery-store-8b1cb-default-rtdb.firebaseio.com/productsDetails/id${params.id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          setLoading(false);
        }
        setLoading(false);
        setProduct(data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [params.id]);

  const productCart = cart.find((product) => product.id === params.id);
  const quantity = productCart ? productCart.quantity : 0;

  const favorite = productCart ? productCart.favorite : false;

  return (
    <>
      <div className="product-details">
        {loading && <Loader />}
        <div className="product-link-back">
          <Link to={`/products`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z"
              />
            </svg>
            Products
          </Link>
          /<div>{product.name}</div>
        </div>
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
                {!favorite ? (
                  <button
                    type="button"
                    className="btn-favorite"
                    onClick={() => props.onProductFavorite(product)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8Z"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn-favorite"
                    onClick={() => props.onProductFavoriteDelete(product.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#ef4444"
                        d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <div>
                <p className="product-details-food-condition">
                  {product.food_condition}
                </p>
                <h2>{product.name}</h2>
                <h3>
                  ${product.price} <span>per kg</span>
                </h3>
              </div>
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
              <p className="product-details-info-title">About product</p>
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
              <p className="product-details-description">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts
        details={product}
        onProductAdd={props.onProductAdd}
        onProductDelete={props.onProductDelete}
        onProductFavorite={props.onProductFavorite}
        onProductFavoriteDelete={props.onProductFavoriteDelete}
        cart={props.cart}
      />
    </>
  );
}
