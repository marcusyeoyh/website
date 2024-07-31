import { useEffect, useState } from "react";
import "./WelcomeBanner.css";

export const WelcomeBanner = () => {
  const texts = [
    "a computer science student",
    "an aspiring software dev",
    "a sports fan",
    "a lifelong learner",
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome-banner">
      <div className="hey">Hey! I'm</div>
      <div className="name">Marcus Yeo</div>
      <div className="changebar">{texts[textIndex]}</div>
    </div>
  );
};
