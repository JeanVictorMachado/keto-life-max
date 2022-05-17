import { FaRunning } from "react-icons/fa";
import { FooterQuestions } from "../../components/FooterQuestions";
import { GreenCircle } from "../../components/GreenCircle";
import { Header } from "../../components/Header";
import { QuestionButton } from "../../components/QuestionButton";

import "./styles.css";

export const QuestionsTwo = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Header
        image="./life-style-family.png"
        icon={<GreenCircle svg={<FaRunning fontSize={30} />} />}
      />

      <p className="questions-one__title">
        Como você define seu estilo de vida?
      </p>

      <div className="questions-one__buttons-container">
        <div className="questions-one__button">
          <QuestionButton link="/3-3" text="sds" />
        </div>

        <div className="questions-one__button">
          <QuestionButton link="/3-3" text="cseucbeucbeucbeucsssssssssssss" />
        </div>

        <div className="questions-one__button">
          <QuestionButton link="/3-3" text="sds" />
        </div>

        <div className="questions-one__button">
          <QuestionButton link="/3-3" text="sds" />
        </div>
      </div>

      <FooterQuestions link="/1-3" porcent="50%" />
    </div>
  );
};
