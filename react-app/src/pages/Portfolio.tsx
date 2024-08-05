import ProjectContainer from "../components/ProjectContainer";
import "./Portfolio.css";
import personalWebsite from "../assets/website.png";
import ticketing from "../assets/ticketing.png";
import chatbot from "../assets/chatbot.png";
import rehome from "../assets/rehome.png";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      {/* <div>
        <div className="portfolio-header">→ ACADEMIC JOURNEY:</div>
      </div> */}
      <div>
        <div className="portfolio-header">→ SELECTED PROJECTS:</div>
        <div>
          <div className="container-list">
            <ProjectContainer
              projDescription="A webpage to showcase my porfolio and past works"
              projLang="Full-Stack Development"
              projName="This Website!"
              projImage={personalWebsite}
            />
            <ProjectContainer
              projDescription="A Ticketing and Support system to aid company support requests"
              projLang="Full-Stack Development"
              projName="Ticketing & Approval System"
              projImage={ticketing}
            />
          </div>
          <div className="container-list">
            <ProjectContainer
              projDescription="An interactive Chatbot application to answer FAQs and aid departmental processes"
              projLang="Full-Stack Development"
              projName="Interactive Chatbot WebApp"
              projImage={chatbot}
            />
            <ProjectContainer
              projDescription="A one-stop webpage to aid property buyers in finding their ideal HDB home"
              projLang="Front-End Development"
              projName="REHome"
              projImage={rehome}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
