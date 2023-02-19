export default function Cart(props) {
  const { cart } = props;

  const totalProducts = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  let totalPrice = cart.reduce(
    (total, product) =>
      total + Number.parseFloat(product.price) * product.quantity,
    0
  );

  let minOrder = 35;
  let totalPriceMinOrder = totalPrice;
  if (totalPriceMinOrder < minOrder) {
    totalPriceMinOrder += 6.99;
  }

  return (
    <div className="cart">
      <div className="cart-content">
        <h1>
          Cart <span>({totalProducts} items)</span>
        </h1>
        {cart.length === 0 && (
          <p>You have not added any product to your cart.</p>
        )}
        {cart.length > 0 && (
          <div className="cart-content-grid">
            <div className="cart-content-products">
              {cart.map((product) => {
                return (
                  <div key={product.id} className="cart-content-product">
                    <div className="cart-image">
                      <img
                        src={product.image}
                        width="100"
                        height="100"
                        alt={product.name}
                      />
                    </div>
                    <div className="cart-info">
                      <div className="cart-info-top">
                        <h3>{product.name}</h3>
                        <p>{product.food_condition}</p>
                      </div>
                      <span>{product.category.toLowerCase()}</span>
                    </div>
                    <div className="cart-price-info">
                      <h3>${product.price}</h3>
                      <div className="product-btns">
                        {product.quantity === 0 ? (
                          <button
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
                        ) : (
                          <>
                            <button
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
                            {product.quantity}
                            <button
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
                  </div>
                );
              })}
            </div>
            <div className="cart-content-bill">
              <h3>Products cost</h3>
              <div className="bill-info">
                <div className="subtotal">
                  <p>Subtotal ({totalProducts} items)</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="order-price">
                  <p>
                    Below order minimum <br></br> (less than $35)
                  </p>
                  <p>${6.99}</p>
                </div>
              </div>
              <div className="bill-total">
                <p>Estimated total</p>
                <p>${totalPriceMinOrder.toFixed(2)}</p>
              </div>
              <button className="btn-checkout">Continue to checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
