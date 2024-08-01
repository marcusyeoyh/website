import "./AboutMe.css";
import profileImage from "../assets/profilepic.jpg";

const AboutMe = () => {
  return (
    <div className="page">
      <div className="profilepic">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="aboutme-text">
        <p className="hey-header">Hey! Welcome to my website!</p>
        <div className="aboutme-body">
          <p>
            I'm Marcus, a third-year Computer Science student at Nanyang
            Technological University, Singapore.
          </p>
          <p>
            I enjoy coding, designing and developing products that make a
            difference and solving complex problems.
          </p>
          <p>
            I'm inqusitive by nature and love travelling and learning everything
            and anything. I also enjoy volunteering and meeting new people.
          </p>
          <p>
            Outside of work, I love reading, working out and watching soccer
            matches with my family and friends - YNWA!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
