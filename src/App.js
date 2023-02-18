import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
