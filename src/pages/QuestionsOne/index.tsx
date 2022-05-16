import { MdOutlineFastfood } from "react-icons/md";
import { FooterQuestions } from "../../components/FooterQuestions";
import { GreenCircle } from "../../components/GreenCircle";
import { Header } from "../../components/Header";
import { QuestionButton } from "../../components/QuestionButton";

import "./styles.css";

export const QuestionsOne = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Header
        image="./olive-oil-keto-friendly.jpeg"
        icon={<GreenCircle svg={<MdOutlineFastfood fontSize={30} />} />}
      />

      <p className="questions-one__title">Qual seu tipo de comida preferida?</p>

      <div className="questions-one__buttons-container">
        <div className="questions-one__button">
          <QuestionButton link="/2-3" text="sds" />
        </div>

        <div className="questions-one__button">
          <QuestionButton link="/2-3" text="cseucbeucbeucbeucsssssssssssss" />
        </div>

        <div className="questions-one__button">
          <QuestionButton link="/2-3" text="sds" />
        </div>

        <div className="questions-one__button">
          <QuestionButton link="/2-3" text="sds" />
        </div>
      </div>

      <FooterQuestions link="/" />
    </div>
  );
};
