import Header from "../components/Header";
import "../App.css";
import "./Home.css";
import LinksBar from "../components/LinksBar";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content-body">
        <div className="welcome-banner">
          <div style={{ fontSize: "3rem" }}>Hey! I'm</div>
          <div style={{ fontSize: "10rem" }}>Marcus Yeo</div>
        </div>
        <LinksBar />
      </div>
    </div>
  );
};

export default Home;
