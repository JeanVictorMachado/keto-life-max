import { useMemo } from "react";

import { ReturnButton } from "../ReturnButton";
import { FiHelpCircle } from "react-icons/fi";

import "./styles.css";

interface FooterQuestionsProps {
  link: string;
}

export const FooterQuestions = ({ link }: FooterQuestionsProps) => {
  const gender = useMemo(() => {
    return localStorage.getItem("@ketopro__gender:");
  }, []);

  return (
    <div
      className="footer-questions__container"
      style={{
        boxShadow: `0 0 5px ${gender === "male" ? "#5172e8" : "#f53373"}`,
      }}
    >
      <ReturnButton
        link={link}
        boderColor="rgb(111, 111, 111)"
        textColor="rgb(111, 111, 111)"
        boxShadowValue="0"
        boxShadowColor=""
      />

      <div className="footer-questions__porcent">25%</div>

      <ReturnButton
        link="#"
        boderColor="rgb(111, 111, 111)"
        textColor="rgb(111, 111, 111)"
        boxShadowValue="0"
        boxShadowColor=""
        sideIcon="right"
        text="Ajuda"
        icon={<FiHelpCircle />}
      />
    </div>
  );
};
