import ProductInfo from "./ProductInfo";

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

  // just some silly numbers to calculate the price
  let totalPriceMinOrder = totalPrice;
  let minOrder = 35;
  let addedPrice = 6.99;

  if (totalPriceMinOrder < minOrder) {
    totalPriceMinOrder += addedPrice;
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
              {cart.filter(product => product.quantity > 0).map((product) => {
                return (
                  <ProductInfo
                    key={product.id}
                    product={product}
                    onProductAdd={props.onProductAdd}
                    onProductDelete={props.onProductDelete}
                    onProductFavorite={props.onProductFavorite}
                    onProductFavoriteDelete={props.onProductFavoriteDelete} />
                );
              })}
            </div>
            {totalProducts > 0 ? (
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
                    <p>$6.99</p>
                  </div>
                </div>
                <div className="bill-total">
                  <p>Estimated total</p>
                  <p>${totalPriceMinOrder.toFixed(2)}</p>
                </div>
                <button type="button" className="btn-checkout">
                  Continue to checkout
                </button>
              </div>) : (
              <button type="button" className="btn">Continue Shopping</button>
            )
            }
          </div>
        )}
      </div>
    </div>
  );
}
