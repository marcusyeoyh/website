import ProjectContainer from "../components/ProjectContainer";
import "./Portfolio.css";
import personalWebsite from "../assets/website.png";
import ticketing from "../assets/ticketing.png";
import chatbot from "../assets/chatbot.png";
import rehome from "../assets/rehome.png";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div>
        <div className="portfolio-header" style={{ marginBottom: "10px" }}>
          → ACADEMIC JOURNEY:
        </div>
        <div className="table-container">
          <table className="table table-borderless">
            <tbody>
              <tr className="schoolrow">
                <td scope="row">Nanyang Technological University, Singapore</td>
                <td className="lastcol">2021-2025</td>
              </tr>
              <tr className="schoolrow">
                <td scope="row">University of California, Berkeley</td>
                <td className="lastcol">2023-2024</td>
              </tr>
              <tr className="schoolrow">
                <td scope="row">Hwa Chong Institution, Singapore</td>
                <td className="lastcol">2013-2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="portfolio-header" style={{ marginBottom: "10px" }}>
          → PAST EXPERIENCES:
        </div>
        <div className="table-container">
          <table className="table table-borderless">
            <tbody>
              <tr className="schoolrow">
                <td scope="row">Software Engineering Intern</td>
                <td className="middlecol">DSO National Laboratories</td>
                <td className="lastcol">May 2024 - August 2024</td>
              </tr>
              <tr className="schoolrow">
                <td scope="row">Software Engineering Intern</td>
                <td className="middlecol">DSO National Laboratories</td>
                <td className="lastcol">May 2023 - August 2023</td>
              </tr>
              <tr className="schoolrow">
                <td scope="row">Data Process Automation Intern</td>
                <td className="middlecol">Maybank Singapore</td>
                <td className="lastcol">May 2022 - August 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="portfolio-header">→ SELECTED PROJECTS:</div>
        <div>
          <div className="container-list">
            <div className="containerleft">
              <ProjectContainer
                projDescription="A webpage to showcase my porfolio and past works"
                projLang="Full-Stack Development"
                projName="This Website!"
                projImage={personalWebsite}
                projLink="https://github.com/marcusyeoyh/website"
              />
            </div>
            <div className="containerright">
              <ProjectContainer
                projDescription="A Ticketing and Support system to aid company support requests"
                projLang="Full-Stack Development"
                projName="Ticketing & Approval System"
                projImage={ticketing}
                projLink="https://github.com/marcusyeoyh/ticketingwebapp"
              />
            </div>
          </div>
          <div className="container-list">
            <div className="containerleft">
              <ProjectContainer
                projDescription="An interactive Chatbot application to answer FAQs and aid departmental processes"
                projLang="Full-Stack Development"
                projName="Interactive Chatbot WebApp"
                projImage={chatbot}
                projLink="https://github.com/marcusyeoyh/Rasa-Chatbot"
              />
            </div>
            <div className="containerright">
              <ProjectContainer
                projDescription="A one-stop webpage to aid property buyers in finding their ideal HDB home"
                projLang="Front-End Development"
                projName="REHome"
                projImage={rehome}
                projLink="https://github.com/marcusyeoyh/SC2006-SWE/tree/main/Housefinder"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
