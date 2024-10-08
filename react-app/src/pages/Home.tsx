import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import "../App.css";
import "./Home.css";
import LinksBar from "../components/LinksBar";
import { WelcomeBanner } from "../components/WelcomeBanner";
import DownArrow from "../components/DownArrow";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Footer from "../components/Footer";

const Home = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutmeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactmeRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = [
      { ref: homeRef, name: "home" },
      { ref: aboutmeRef, name: "aboutme" },
      { ref: portfolioRef, name: "portfolio" },
      { ref: contactmeRef, name: "contactme" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(
              `Section ${entry.target.id} is intersecting ${entry.isIntersecting}`
            );
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // Adjust as needed for when the section becomes active
      }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="webpage">
      <section ref={topRef}>
        <Header
          TopRef={topRef}
          AboutMeRef={aboutmeRef}
          PortfolioRef={portfolioRef}
          ContactMeRef={contactmeRef}
          activeSection={activeSection}
        />
        <LinksBar />
        <section ref={homeRef} id="home">
          <div className="content-body">
            <WelcomeBanner />
          </div>
        </section>
        <DownArrow targetRef={aboutmeRef} />
        <section ref={aboutmeRef} id="aboutme">
          <AboutMe />
        </section>
        <section ref={portfolioRef} id="portfolio">
          <Portfolio />
        </section>
        <section ref={contactmeRef} id="contactme">
          <ContactMe />
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
