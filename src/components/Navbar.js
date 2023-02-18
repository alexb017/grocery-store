import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content">
          <NavLink to="/" className="nav-title">
            GroceryStore
          </NavLink>
          <ul className="nav-ul">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <button className="btn-cart">Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
