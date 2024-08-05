import ProjectContainer from "../components/ProjectContainer";
import "./Portfolio.css";
import personalWebsite from "../assets/website.png";
import ticketing from "../assets/ticketing.png";
import chatbot from "../assets/chatbot.png";
import rehome from "../assets/rehome.png";
import medsimplified from "../assets/medsimplifyED.png";
import pairstrading from "../assets/pairstrading.png";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-header">→ SELECTED PROJECTS:</div>
      <div>
        <div className="container-list">
          <ProjectContainer
            projDescription="I'm passionate about innovation and driven by impact. I love to work
            with individuals from different backgrounds to produce products that
            make a difference."
            projLang="Full-Stack Development"
            projName="This Website!"
            projImage={personalWebsite}
          />
          <ProjectContainer
            projDescription="Hello"
            projLang="Full-Stack Development"
            projName="Ticketing & Approval System"
            projImage={ticketing}
          />
        </div>
        <div className="container-list">
          <ProjectContainer
            projDescription="Hello"
            projLang="Full-Stack Development"
            projName="Interactive Chatbot WebApp"
            projImage={chatbot}
          />
          <ProjectContainer
            projDescription="Hello"
            projLang="Front-End Development"
            projName="REHome"
            projImage={rehome}
          />
        </div>
        <div className="container-list">
          <ProjectContainer
            projDescription="Hello"
            projLang="Back-End Development"
            projName="MedSimplyD"
            projImage={medsimplified}
          />
          <ProjectContainer
            projDescription="Hello"
            projLang="Research & Proposal"
            projName="Pairs Trading Exploration"
            projImage={pairstrading}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
