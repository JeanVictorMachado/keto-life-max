import { Link } from "react-router-dom";

import "./styles.css";

interface QuestionButtonProps {
  link: string;
  text: string;
}

export const QuestionButton = ({ link, text }: QuestionButtonProps) => {
  const gender = localStorage.getItem("@ketopro__gender:");

  return (
    <Link to={link} className={`question-button__container ${gender}`}>
      <span className="question-button__text">{text}</span>
    </Link>
  );
};
