import "./AboutMe.css";
import profileImage from "../assets/profilepic.jpg";

const AboutMe = () => {
  return (
    <div className="page">
      <div className="profilepic">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="aboutme-text">
        <p className="hey-header">Hi! Welcome to my website!</p>
        <div className="aboutme-body">
          <p>
            I'm Marcus, a third-year Computer Science student at Nanyang
            Technological University, Singapore.
          </p>
          <p>
            I enjoy coding, designing and developing fullstack products and
            solving complex problems.
          </p>
          <p>
            I'm passionate about innovation and driven by impact. I love to work
            with individuals from different backgrounds to produce products that
            make a difference.
          </p>
          <p>
            Outside of work, I love travelling, reading, working out and
            watching Liverpool matches - YNWA!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
