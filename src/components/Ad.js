import { NavLink } from 'react-router-dom';

export default function Ad() {
  return (
    <div className="ad">
      <div className="container">
        <div className="ad-top-content">
          <p>
            New to <strong>GroceryStore</strong>?
          </p>
          <p className="text-promo">
            Use promo code <strong>NEWGROCERY</strong> to get $15 off your first
            4 online grocery orders of $75 or more.
          </p>
          <NavLink to="/products">
            Learn more{' '}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m19.704 12-8.492-8.727a.75.75 0 1 1 1.075-1.046l9 9.25a.75.75 0 0 1 0 1.046l-9 9.25a.75.75 0 1 1-1.075-1.046L19.705 12Z" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
