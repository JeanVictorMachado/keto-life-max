import { Link } from "react-router-dom";

import "./styles.css";

interface QuestionButtonProps {
  link: string;
  text: string;
  onClick?: () => void;
}

export const QuestionButton = ({
  link,
  text,
  onClick,
}: QuestionButtonProps) => {
  const gender = localStorage.getItem("@ketolife__gender:");

  return (
    <Link
      to={link}
      onClick={onClick}
      className={`question-button__container ${gender}`}
    >
      <span className="question-button__text">{text}</span>
    </Link>
  );
};
