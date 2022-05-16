import { ReturnButton } from "../ReturnButton";

import { FiHelpCircle } from "react-icons/fi";

import "./styles.css";

interface FooterQuestionsProps {
  link: string;
}

export const FooterQuestions = ({ link }: FooterQuestionsProps) => {
  return (
    <div className="footer-questions__container">
      <ReturnButton
        link={link}
        boderColor="rgb(111, 111, 111)"
        boxShadowValue="0"
        boxShadowColor=""
      />

      <div className="footer-questions__porcent">25%</div>

      <ReturnButton
        link="/ajuda"
        boderColor="rgb(111, 111, 111)"
        boxShadowValue="0"
        boxShadowColor=""
        sideIcon="right"
        text="Ajuda"
        icon={<FiHelpCircle />}
      />
    </div>
  );
};
