import Header from "../components/Header";
import "../App.css";
import "./Home.css";
import LinksBar from "../components/LinksBar";
import { WelcomeBanner } from "../components/WelcomeBanner";
import DownArrow from "../components/DownArrow";
import { useRef } from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";

const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutmeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactmeRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Header
        AboutMeRef={aboutmeRef}
        PortfolioRef={portfolioRef}
        ContactMeRef={contactmeRef}
        HomeRef={homeRef}
      />
      <LinksBar />
      <section ref={homeRef}>
        <div className="content-body">
          <WelcomeBanner />
        </div>
      </section>
      <DownArrow targetRef={aboutmeRef} />
      <section ref={aboutmeRef}>
        <AboutMe />
      </section>
      <section ref={portfolioRef}>
        <Portfolio />
      </section>
      <section ref={contactmeRef}>
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
