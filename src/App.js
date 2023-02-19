import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Ad from './components/Ad';
import './App.css';
import { useState } from 'react';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  function handleProductAdd(newProduct) {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...newProduct, quantity: 1 }]);
    }
  }

  function handleProductDelete(id) {
    const productDelete = cart.filter((product) => product.id !== id);
    const existingProduct = cart.find((product) => product.id === id);

    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setCart(updatedCart);
    }

    if (existingProduct.quantity === 1) {
      setCart(productDelete);
    }
  }

  return (
    <BrowserRouter>
      <main className="main">
        <Ad />
        <Navbar cart={cart} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/products"
              element={
                <Products
                  cart={cart}
                  onProductAdd={handleProductAdd}
                  onProductDelete={handleProductDelete}
                />
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onProductAdd={handleProductAdd}
                  onProductDelete={handleProductDelete}
                />
              }
            ></Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
