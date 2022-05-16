import { Link } from "react-router-dom";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import "./styles.css";

interface ReturnButtonProps {
  link: string;
}

export const ReturnButton = ({ link }: ReturnButtonProps) => {
  return (
    <Link to={link} className="return-button__container">
      <div className="return-button__container-icon">
        <FaRegArrowAltCircleLeft />
      </div>
      Voltar
    </Link>
  );
};
