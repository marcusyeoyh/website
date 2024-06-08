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
              style={{ color: "white", fontFamily: "Helvetica Neue" }}
            >
              my_website!
            </a>
            <ul
              className="dropdown-menu"
              style={{
                color: "white",
                fontFamily: "Helvetica Neue",
                minWidth: "300px",
                borderRadius: "10px",
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                backgroundColor: "#494848",
              }}
            >
              <div className="p-3">
                <p className="mb-0">Welcome to my website!</p>
                <hr />
                <p className="mb-0">Location: Singapore</p>
                <p className="mb-0">Last Edit: [insert date here]</p>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
