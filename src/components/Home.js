import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h1>
            Buy groceries <br></br> easilly with us
          </h1>
          <p>
            Shopping is a bit of a relaxing hobby for me, which <br></br> is
            something troubling for the bank balance.
          </p>
          <NavLink to="/products" className="btn-home">
            View products
          </NavLink>
        </div>
      </div>
    </div>
  );
}
