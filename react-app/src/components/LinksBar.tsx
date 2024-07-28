import "./LinksBar.css";

const LinksBar = () => {
  const handleURLClicked = (endpoint: string) => {
    window.open(endpoint, "_blank");
  };

  return (
    <div className="sidebar">
      <button
        className="sidebar-button"
        onClick={() =>
          handleURLClicked("https://www.linkedin.com/in/marcus-yeo24/")
        }
      >
        <i className="bi bi-linkedin"></i>
      </button>
      <button
        className="sidebar-button"
        onClick={() => handleURLClicked("https://github.com/marcusyeoyh")}
      >
        <i className="bi bi-github"></i>
      </button>
      <button
        className="sidebar-button"
        onClick={() =>
          handleURLClicked("https://www.instagram.com/marcusyeoyh/")
        }
      >
        <i className="bi bi-instagram"></i>
      </button>
    </div>
  );
};

export default LinksBar;
