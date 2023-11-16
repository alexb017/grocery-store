import ProductInfo from './ProductInfo';

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
              {cart
                .filter((product) => product.quantity > 0)
                .map((product) => {
                  return (
                    <ProductInfo
                      key={product.id}
                      product={product}
                      onProductAdd={props.onProductAdd}
                      onProductDelete={props.onProductDelete}
                      onProductFavorite={props.onProductFavorite}
                      onProductFavoriteDelete={props.onProductFavoriteDelete}
                    />
                  );
                })}
            </div>
            {totalProducts > 0 ? (
              <div className="cart-content-bill">
                <h3>Your order</h3>
                <div className="bill-info">
                  {/* <div className="subtotal">
                    <p>Subtotal ({totalProducts} items)</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div> */}
                  <div className="order-taxes">
                    <p>Taxes</p>
                    <p>$0.00</p>
                  </div>
                  <div className="order-shipping">
                    <p>Shopping</p>
                    <p>Free</p>
                  </div>
                </div>
                <div className="bill-total">
                  <p>Total</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <button type="button" className="btn-checkout">
                  Continue to checkout
                </button>
              </div>
            ) : (
              <button type="button" className="btn">
                Continue Shopping
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
