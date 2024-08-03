import "./Header.css";
import resume from "../assets/Marcus Yeo Resume 2024.pdf";

type HeaderProps = {
  TopRef: React.RefObject<HTMLDivElement>;
  AboutMeRef: React.RefObject<HTMLDivElement>;
  PortfolioRef: React.RefObject<HTMLDivElement>;
  ContactMeRef: React.RefObject<HTMLDivElement>;
  activeSection: string;
};

const Header: React.FC<HeaderProps> = ({
  TopRef,
  AboutMeRef,
  PortfolioRef,
  ContactMeRef,
  activeSection,
}) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "marcusyeo_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-primary">
      <div className="container-fluid">
        <div className="d-flex justify-content-center w-100">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === "home" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => scrollToSection(TopRef)}
              >
                home
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === "aboutme" ? "active" : ""
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
                  activeSection === "portfolio" ? "active" : ""
                }`}
                onClick={() => scrollToSection(PortfolioRef)}
              >
                portfolio
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === "contactme" ? "active" : ""
                }`}
                onClick={() => scrollToSection(ContactMeRef)}
              >
                contact me
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                onClick={() => downloadResume()}
              >
                my resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
