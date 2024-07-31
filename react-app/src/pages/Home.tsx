import Header from "../components/Header";
import "../App.css";
import "./Home.css";
import LinksBar from "../components/LinksBar";
import { WelcomeBanner } from "../components/WelcomeBanner";
import { useRef } from "react";

const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const scrollAboutMe = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header />
      <div className="content-body">
        <WelcomeBanner />
        <LinksBar />
      </div>
      <button className="scroll-button" onClick={scrollAboutMe}>
        Scroll Down
      </button>
      <section id="target-section" ref={targetRef}>
        <h2>Target Section</h2>
        <p>This is the section you scroll to.</p>
      </section>
    </div>
  );
};

export default Home;
