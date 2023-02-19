import { Link } from 'react-router-dom';

export default function Product(props) {
  const { details } = props;
  const productCart = props.cart.find((product) => product.id === details.id);
  const quantity = productCart ? productCart.quantity : 0;

  return (
    <div className="product">
      <div className="product-content">
        <div className="product-content-image">
          <Link to={`/products/${details.id}`}>
            <img
              src={details.image}
              width="500"
              height="500"
              className="product-image"
              alt={details.name}
            />
          </Link>
        </div>
        <div className="product-info">
          <h3>{details.name}</h3>
          <p>{details.food_condition}</p>
        </div>
        <div className="product-price">
          <p>
            <span>${details.price}</span> per kg
          </p>
          <div className="product-btns">
            {quantity === 0 ? (
              <button
                className="product-btn-add"
                onClick={() => props.onProductAdd(details)}
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
            ) : (
              <>
                <button
                  className="product-btn-add"
                  onClick={() => props.onProductDelete(details.id)}
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
                {quantity}
                <button
                  className="product-btn-add"
                  onClick={() => props.onProductAdd(details)}
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
      </div>
    </div>
  );
}
