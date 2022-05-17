import { FaCalculator } from "react-icons/fa";
import { FooterQuestions } from "../../components/FooterQuestions";
import { GreenCircle } from "../../components/GreenCircle";
import { Header } from "../../components/Header";
import { QuestionButton } from "../../components/QuestionButton";

import "./styles.css";

export const QuestionsThree = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Header
        image="./calculate-infos.jpeg"
        icon={<GreenCircle svg={<FaCalculator fontSize={30} />} />}
      />

      <p className="questions-one__title">
        Insira alguns dados e veja como atingir seus resiltados?
      </p>

      <div className="questions-one__buttons-container">
        <div className="questions-one__button">
          <QuestionButton link="/resultado" text="sds" />
        </div>

        <div className="questions-one__button">
          <QuestionButton
            link="/resultado"
            text="cseucbeucbeucbeucsssssssssssss"
          />
        </div>

        <div className="questions-one__button">
          <QuestionButton link="/resultado" text="sds" />
        </div>

        <div className="questions-one__button">
          <QuestionButton link="/resultado" text="sds" />
        </div>
      </div>

      <FooterQuestions link="/2-3" porcent="75%" />
    </div>
  );
};
