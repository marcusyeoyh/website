import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg"
      style={{ backgroundColor: "#274472" }}
    >
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "white", fontFamily: "Arial" }}
            >
              my_website!
            </a>
            <ul className="dropdown-menu">
              <div className="justify-content-center">
                Welcome to my website!
              </div>
              <li>
                <a className="dropdown-item" href="#">
                  Location: Singapore, Singapore
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Last Edit:
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
