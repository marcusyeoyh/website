import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-primary">
      <div className="container-fluid">
        <div className="d-flex justify-content-center w-100">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/aboutme" ? "active" : ""
                }`}
                aria-current="page"
                to="/aboutme"
              >
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/portfolio" ? "active" : ""
                }`}
                to="/portfolio"
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/contactme" ? "active" : ""
                }`}
                to="/contactme"
              >
                contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
