import { ReturnButton } from "../ReturnButton";

import { FiHelpCircle } from "react-icons/fi";

import "./styles.css";

interface FooterQuestionsProps {
  link: string;
  porcent: string;
}

export const FooterQuestions = ({
  link,
  porcent = "25%",
}: FooterQuestionsProps) => {
  return (
    <div className="footer-questions__container">
      <ReturnButton
        link={link}
        boderColor="rgb(111, 111, 111)"
        textColor="rgb(111, 111, 111)"
        boxShadowValue="0"
        boxShadowColor=""
      />

      <div className="footer-questions__porcent">{porcent}</div>

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
