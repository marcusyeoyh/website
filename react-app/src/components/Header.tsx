import { Link, useLocation } from "react-router-dom";
import "./Header.css";

type HeaderProps = {
  AboutMeRef: React.RefObject<HTMLDivElement>;
  PortfolioRef: React.RefObject<HTMLDivElement>;
  ContactMeRef: React.RefObject<HTMLDivElement>;
  HomeRef: React.RefObject<HTMLDivElement>;
};

const Header: React.FC<HeaderProps> = ({
  AboutMeRef,
  PortfolioRef,
  ContactMeRef,
  HomeRef,
}) => {
  const location = useLocation();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-primary">
      <div className="container-fluid">
        <div className="d-flex justify-content-center w-100">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => scrollToSection(HomeRef)}
              >
                home
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  location.pathname === "/aboutme" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => scrollToSection(AboutMeRef)}
              >
                about me
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  location.pathname === "/portfolio" ? "active" : ""
                }`}
                onClick={() => scrollToSection(PortfolioRef)}
              >
                portfolio
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  location.pathname === "/contactme" ? "active" : ""
                }`}
                onClick={() => scrollToSection(ContactMeRef)}
              >
                contact me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
