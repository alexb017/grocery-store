import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SuccessOrder({ setCart }) {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === '/success-order') {
      setCart([]);
    }
  }, [pathname, setCart]);

  return (
    <div className="success-order">
      <div className="success-order-content">
        <div className="success-order-content-grid">
          <div className="success-order-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
              >
                <path d="M12 21a9 9 0 1 0-6.364-2.636" />
                <path d="m16 10l-3.598 4.318c-.655.786-.983 1.18-1.424 1.2c-.44.02-.803-.343-1.527-1.067L8 13" />
              </g>
            </svg>
            <h1>Thank you for ordering!</h1>
            <Link to="/products" className="continue-shopping">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
