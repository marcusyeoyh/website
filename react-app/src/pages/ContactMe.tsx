import "./ContactMe.css";
import resume from "../assets/Marcus Yeo Resume 2024.pdf";

const ContactMe = () => {
  const onClick = (link: string) => {
    window.open(link, "__blank");
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
    <div className="page">
      <div className="title">Let's stay in touch!</div>
      <div className="contact">
        <i className="bi bi-telephone-plus-fill"></i>
        +65 96998676
      </div>
      <div className="contact">
        <i className="bi bi-envelope"></i>
        marcusyeoyh@gmail.com
      </div>
      <div className="mediabar">
        <button
          className="socialmedia"
          onClick={() => onClick("https://www.linkedin.com/in/marcus-yeo24/")}
        >
          <i className="bi bi-linkedin"></i>
        </button>
        <button
          className="socialmedia"
          onClick={() => onClick("https://github.com/marcusyeoyh")}
        >
          <i className="bi bi-github"></i>
        </button>
        <button
          className="socialmedia"
          onClick={() => onClick("https://www.instagram.com/marcusyeoyh/")}
        >
          <i className="bi bi-instagram"></i>
        </button>
      </div>
      <button className="resumedownload" onClick={downloadResume}>
        → Download my resume!
      </button>
    </div>
  );
};

export default ContactMe;
