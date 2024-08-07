import React from "react";
import "./ProjectContainer.css";

type ProjectContainerProps = {
  projName: string;
  projDescription: string;
  projLang: string;
  projImage: string;
  projLink: string;
};

const ProjectContainer: React.FC<ProjectContainerProps> = ({
  projName,
  projDescription,
  projLang,
  projImage,
  projLink,
}) => {
  const handleClick = (endpoint: string) => {
    window.open(endpoint, "_blank");
  };

  return (
    <div className="container-body" onClick={() => handleClick(projLink)}>
      <div className="container-imageholder">
        <img src={projImage} />
      </div>
      <div className="container-description-container">
        <div className="container-description">{projDescription}</div>
      </div>
      <div className="container-title">
        <div className="proj-name">{projName}</div>
        <div className="proj-lang">{projLang}</div>
      </div>
    </div>
  );
};

export default ProjectContainer;
