import { useContext } from "react";
import { FaRunning } from "react-icons/fa";
import { FooterQuestions } from "../../components/FooterQuestions";
import { GreenCircle } from "../../components/GreenCircle";
import { Header } from "../../components/Header";
import { QuestionButton } from "../../components/QuestionButton";
import ContextAPI from "../../context/ContextApi";

import "./styles.css";

export const QuestionsTwo = () => {
  const { setQuestionTwo } = useContext(ContextAPI);

  const handleClick = (value: string) => {
    const personalInformations = JSON.parse(
      localStorage.getItem("@ketolife__personalinformations:") as string
    );

    if (personalInformations) {
      localStorage.setItem(
        "@ketolife__personalinformations:",
        JSON.stringify({
          ...personalInformations,
          questionTwo: value,
        })
      );
    } else {
      localStorage.setItem(
        "@ketolife__personalinformations:",
        JSON.stringify({
          questionTwo: value,
        })
      );
    }

    setQuestionTwo(value);
  };

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Header
        image="./images/mudanca-habitos.jpg"
        icon={<GreenCircle svg={<FaRunning fontSize={30} />} />}
      />

      <p className="questions-one__title">
        Como você define seu estilo de vida?
      </p>

      <div className="questions-one__buttons-container">
        <div className="questions-one__button">
          <QuestionButton
            link="/3-3"
            text="Pratico atividades físicas regularmente"
            onClick={() => handleClick("1")}
          />
        </div>

        <div className="questions-one__button">
          <QuestionButton
            link="/3-3"
            text="Às vezes pratico atividades físicas"
            onClick={() => handleClick("2")}
          />
        </div>

        <div className="questions-one__button">
          <QuestionButton
            link="/3-3"
            text="Não pratico atividades físicas mas faço esforço no trabalho"
            onClick={() => handleClick("3")}
          />
        </div>

        <div className="questions-one__button">
          <QuestionButton
            link="/3-3"
            text="Não pratico atividades físicas e trabalho sentado"
            onClick={() => handleClick("4")}
          />
        </div>
      </div>

      <FooterQuestions link="/1-3" porcent="50%" />
    </div>
  );
};
