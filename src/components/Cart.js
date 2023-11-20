import ProductInfo from './ProductInfo';
//import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(
//   'pk_test_51NoptQIF5Ewa0z1weAgAPPKYRio4rkIbNTYPuRPlXd3OdWsMaceCjCMNETTJSXp9yVsXpx6whtH8W4r0LGAIZ86L00YKiIUNvJ'
// );

export default function Cart(props) {
  const { cart } = props;

  const totalProducts = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, product) =>
      total + Number.parseFloat(product.price) * product.quantity,
    0
  );

  const totalQuantity = cart.reduce(
    (total, product) => total + Number.parseInt(product.quantity),
    0
  );

  async function handleCheckout(event) {
    event.preventDefault();

    const lineItems = cart.map((item) => {
      return { price: item?.price_id, quantity: item?.quantity };
    });

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lineItems),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      throw new Error('Error post new order');
    }
    // const stripe = await stripePromise;

    // const lineItems = cart.map((item) => {
    //   return { price: item?.price_id, quantity: item?.quantity };
    // });

    // try {
    //   await stripe?.redirectToCheckout({
    //     lineItems: lineItems,
    //     mode: 'payment',
    //     successUrl: `https://grocery-store-alexb017.vercel.app/success-order`,
    //     cancelUrl: `https://grocery-store-alexb017.vercel.app/cart`,
    //   });
    // } catch (error) {
    //   throw new Error('Error wrong api key...');
    // }
  }

  return (
    <div className="cart">
      <div className="cart-content">
        <h1>
          Cart <span>({totalProducts} items)</span>
        </h1>
        {cart.length === 0 || totalQuantity === 0 ? (
          <p>You have not added any product to your cart.</p>
        ) : null}
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
                <form onSubmit={handleCheckout}>
                  <button type="submit" className="btn-checkout">
                    Continue to checkout
                  </button>
                </form>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
