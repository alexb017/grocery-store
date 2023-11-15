import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Navbar(props) {
  // const [isDarkTheme, setIsDarkTheme] = useState(
  //   () => localStorage.getItem('isDarkTheme') === 'true'
  // );
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownBg, setShowDropdownBg] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownBgRef = useRef(null);
  const btnDropdownRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        dropdownBgRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !btnDropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
        setShowDropdownBg(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownRef, dropdownBgRef, btnDropdownRef]);

  // useEffect(() => {
  //   localStorage.setItem('isDarkTheme', isDarkTheme);

  //   if (isDarkTheme) {
  //     document.body.classList.add('dark');
  //   } else {
  //     document.body.classList.remove('dark');
  //   }
  // }, [isDarkTheme]);

  // function handleThemeClick() {
  //   setIsDarkTheme(!isDarkTheme);
  // }

  const productsCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  // const totalPrice = props.cart.reduce(
  //   (total, product) =>
  //     total + Number.parseFloat(product.price) * product.quantity,
  //   0
  // );

  const favorites = props.cart.reduce(
    (total, product) => total + (product.favorite ? 1 : 0),
    0
  );

  function handleDropdownClick() {
    setShowDropdown(!showDropdown);
    setShowDropdownBg(!showDropdownBg);
  }

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <NavLink to="/" className="nav-title">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2a.75.75 0 0 1 .474.169l.076.07 3.272 3.53.03.038c.102.136.148.29.148.44L22 8.168c0 .994-.379 1.9-1 2.58V21.25a.75.75 0 0 1-.649.743L20.25 22H3.75a.75.75 0 0 1-.743-.648l-.007-.102V10.748a3.818 3.818 0 0 1-.993-2.353L2 8.167V6.29a.728.728 0 0 1 .096-.408l.065-.095.04-.046L5.45 2.24a.75.75 0 0 1 .447-.233L6 2h12Zm-2.918 8.442-.012.018A3.827 3.827 0 0 1 11.999 12a3.827 3.827 0 0 1-3.083-1.556A3.825 3.825 0 0 1 5.834 12c-.47 0-.919-.084-1.334-.238v8.738H6v-6.748a.75.75 0 0 1 .648-.743L6.75 13h4.496a.75.75 0 0 1 .743.648l.007.102v6.748h7.502v-8.737a3.827 3.827 0 0 1-4.416-1.32Zm-4.587 4.059H7.5v5.998h2.995v-5.998Zm6.76-1.5a.75.75 0 0 1 .743.648l.007.102v3.502a.75.75 0 0 1-.649.743l-.101.007h-3.502a.75.75 0 0 1-.743-.648l-.007-.102v-3.502a.75.75 0 0 1 .648-.743l.102-.007h3.502Zm-.751 1.5h-2.001v2.002h2v-2.002ZM8.166 7.002H3.5v1.165l.006.17.029.232.032.156.05.172.054.148.04.094c.032.068.066.134.104.198l.102.162.055.074.129.156.141.144.097.085.042.034c.314.25.695.422 1.111.483l.18.019.16.005c1.235 0 2.246-.959 2.328-2.173l.005-.16V7.003Zm6.165 0H9.666v1.165c0 1.18.878 2.157 2.016 2.311l.157.016.16.005c1.234 0 2.245-.959 2.327-2.173l.005-.16V7.003Zm6.167 0h-4.665v1.165c0 1.18.878 2.157 2.017 2.311l.156.016.16.005c.564 0 1.082-.2 1.485-.534l.09-.078.116-.113.146-.17c.054-.069.105-.14.15-.216l.104-.186.063-.138.058-.155.03-.096.038-.152.029-.157.018-.167.006-.17-.001-1.165ZM9.062 3.499H6.327L4.469 5.502h3.977l.616-2.003Zm4.306 0H10.63l-.616 2.003h3.97l-.616-2.003Zm4.304 0h-2.735l.617 2.003h3.976l-1.858-2.003Z" />
            </svg>
            GroceryStore
          </NavLink>
          <ul className="nav-ul-mobile">
            <li className="nav-li-favorite">
              <NavLink
                to="/favorite"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {favorites > 0 && (
                  <div className="favorite-count">{favorites}</div>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8Z"
                  />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="btn-cart">
                {productsCount > 0 && (
                  <>
                    <div className="btn-cart-count">{productsCount}</div>
                    {/* <div className="btn-cart-price">
                      ${totalPrice.toFixed(2)}
                    </div> */}
                  </>
                )}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v10.005A3.495 3.495 0 0 1 16.505 22H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7H7Zm6.635 13.5a3.479 3.479 0 0 1-.625-1.995V8.5H5.5V18A2.5 2.5 0 0 0 8 20.5h5.635ZM11.5 7V5a1.5 1.5 0 0 0-3 0v2h3ZM13 7h2.5V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956v2Zm1.51 11.505a1.995 1.995 0 0 0 3.99 0V8.5h-3.99v10.005Z" />
                </svg>
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="btn-more"
                onClick={handleDropdownClick}
                ref={btnDropdownRef}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z"
                  />
                </svg>
              </button>
            </li>
          </ul>
          {showDropdown && (
            <div className="dropdown-mobile" ref={dropdownRef}>
              <div className="dropdown-mobile-content">
                <ul className="dropdown-ul">
                  <li className="nav-li">
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      onClick={handleDropdownClick}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-li">
                    <NavLink
                      to="/products"
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      onClick={handleDropdownClick}
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-li">
                    <NavLink
                      to="/about"
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      onClick={handleDropdownClick}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-li">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      onClick={handleDropdownClick}
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-li">
                    <NavLink
                      to="/credits"
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      onClick={handleDropdownClick}
                    >
                      Credits
                    </NavLink>
                  </li>
                  {/* <li className="nav-li nav-li-appearance-mobile">
                    <button type="button" className="btn-appearence btn-appearence-mobile" onClick={handleThemeClick}>
                      {!isDarkTheme ?
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" /></svg>
                          Dark Mode
                        </>
                        :
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4Z" /></svg>
                          Light Mode
                        </>}
                    </button>
                  </li> */}
                </ul>
              </div>
            </div>
          )}
          {showDropdownBg && (
            <div className="dropdown-background" ref={dropdownBgRef}></div>
          )}
          <ul className="nav-ul">
            <li className="nav-li">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                About
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-li-favorite">
              <NavLink
                to="/favorite"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {favorites > 0 && (
                  <div className="favorite-count">{favorites}</div>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8Z"
                  />
                </svg>
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="btn-cart">
                {productsCount > 0 && (
                  <>
                    <div className="btn-cart-count">{productsCount}</div>
                    {/* <div className="btn-cart-price">
                      ${totalPrice.toFixed(2)}
                    </div> */}
                  </>
                )}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v10.005A3.495 3.495 0 0 1 16.505 22H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7H7Zm6.635 13.5a3.479 3.479 0 0 1-.625-1.995V8.5H5.5V18A2.5 2.5 0 0 0 8 20.5h5.635ZM11.5 7V5a1.5 1.5 0 0 0-3 0v2h3ZM13 7h2.5V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956v2Zm1.51 11.505a1.995 1.995 0 0 0 3.99 0V8.5h-3.99v10.005Z" />
                </svg>
                Cart
              </NavLink>
            </li>
            {/* <li className="nav-li">
              <button
                type="button"
                className="btn-appearence"
                onClick={handleThemeClick}
              >
                {!isDarkTheme ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"
                      />
                    </svg>
                    Dark Mode
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4Z"
                      />
                    </svg>
                    Light Mode
                  </>
                )}
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
