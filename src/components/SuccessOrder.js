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
            <h1>🎉</h1>
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
