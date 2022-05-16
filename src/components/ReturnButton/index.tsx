import { Link } from "react-router-dom";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import "./styles.css";

interface ReturnButtonProps {
  link: string;
  text?: string;
  boderColor?: string;
  icon?: React.ReactNode;
  boxShadowColor?: string;
  boxShadowValue?: string;
  sideIcon?: "left" | "right";
}

export const ReturnButton = ({
  link,
  text,
  boderColor,
  icon,
  boxShadowValue,
  boxShadowColor,
  sideIcon = "left",
}: ReturnButtonProps) => {
  return (
    <Link
      to={link}
      className="return-button__container"
      style={{
        border: `1px solid ${boderColor}`,
        boxShadow: `0 0 ${boxShadowValue} ${boxShadowColor}`,
      }}
    >
      {sideIcon === "left" && (
        <div
          className="return-button__container-icon"
          style={{
            marginRight: "8px",
          }}
        >
          {!!icon ? icon : <FaRegArrowAltCircleLeft />}
        </div>
      )}

      {!!text ? text : "Voltar"}

      {sideIcon === "right" && (
        <div
          className="return-button__container-icon"
          style={{
            marginLeft: "8px",
          }}
        >
          {!!icon ? icon : <FaRegArrowAltCircleLeft />}
        </div>
      )}
    </Link>
  );
};
