import "./DownArrow.css";

type ScrollButtonProps = {
  targetRef: React.RefObject<HTMLDivElement>;
};

const DownArrow: React.FC<ScrollButtonProps> = ({ targetRef }) => {
  const scrollToSection = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="down-icon">
      <i className="bi bi-arrow-down" onClick={scrollToSection}></i>
    </div>
  );
};

export default DownArrow;
