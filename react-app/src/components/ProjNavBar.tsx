import { useNavigate } from "react-router-dom";

const ProjNavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-primary">
      <div className="container-fluid">
        <div className="d-flex justify-content-center w-100">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button aria-current="page" onClick={() => navigate("/")}>
                back to home
              </button>
            </li>
            <li className="nav-item">
              <button aria-current="page" onClick={() => navigate("/")}>
                back to projects
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ProjNavBar;
