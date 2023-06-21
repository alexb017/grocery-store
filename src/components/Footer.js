import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2023 GroceryStore.</p>
          <Link to="/" className="nav-title">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2a.75.75 0 0 1 .474.169l.076.07 3.272 3.53.03.038c.102.136.148.29.148.44L22 8.168c0 .994-.379 1.9-1 2.58V21.25a.75.75 0 0 1-.649.743L20.25 22H3.75a.75.75 0 0 1-.743-.648l-.007-.102V10.748a3.818 3.818 0 0 1-.993-2.353L2 8.167V6.29a.728.728 0 0 1 .096-.408l.065-.095.04-.046L5.45 2.24a.75.75 0 0 1 .447-.233L6 2h12Zm-2.918 8.442-.012.018A3.827 3.827 0 0 1 11.999 12a3.827 3.827 0 0 1-3.083-1.556A3.825 3.825 0 0 1 5.834 12c-.47 0-.919-.084-1.334-.238v8.738H6v-6.748a.75.75 0 0 1 .648-.743L6.75 13h4.496a.75.75 0 0 1 .743.648l.007.102v6.748h7.502v-8.737a3.827 3.827 0 0 1-4.416-1.32Zm-4.587 4.059H7.5v5.998h2.995v-5.998Zm6.76-1.5a.75.75 0 0 1 .743.648l.007.102v3.502a.75.75 0 0 1-.649.743l-.101.007h-3.502a.75.75 0 0 1-.743-.648l-.007-.102v-3.502a.75.75 0 0 1 .648-.743l.102-.007h3.502Zm-.751 1.5h-2.001v2.002h2v-2.002ZM8.166 7.002H3.5v1.165l.006.17.029.232.032.156.05.172.054.148.04.094c.032.068.066.134.104.198l.102.162.055.074.129.156.141.144.097.085.042.034c.314.25.695.422 1.111.483l.18.019.16.005c1.235 0 2.246-.959 2.328-2.173l.005-.16V7.003Zm6.165 0H9.666v1.165c0 1.18.878 2.157 2.016 2.311l.157.016.16.005c1.234 0 2.245-.959 2.327-2.173l.005-.16V7.003Zm6.167 0h-4.665v1.165c0 1.18.878 2.157 2.017 2.311l.156.016.16.005c.564 0 1.082-.2 1.485-.534l.09-.078.116-.113.146-.17c.054-.069.105-.14.15-.216l.104-.186.063-.138.058-.155.03-.096.038-.152.029-.157.018-.167.006-.17-.001-1.165ZM9.062 3.499H6.327L4.469 5.502h3.977l.616-2.003Zm4.306 0H10.63l-.616 2.003h3.97l-.616-2.003Zm4.304 0h-2.735l.617 2.003h3.976l-1.858-2.003Z" />
            </svg>
            GroceryStore
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
