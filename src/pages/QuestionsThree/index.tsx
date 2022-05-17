import { FaCalculator } from "react-icons/fa";
import { FooterQuestions } from "../../components/FooterQuestions";
import { GreenCircle } from "../../components/GreenCircle";
import { Header } from "../../components/Header";
import { InputCalculation } from "../../components/InputCalculation";
import { SubmitButton } from "../../components/SubmitButton";

import "./styles.css";

export const QuestionsThree = () => {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Header
        image="./calculate-infos.jpeg"
        icon={<GreenCircle svg={<FaCalculator fontSize={30} />} />}
      />

      <p className="questions-one__title">
        Insira alguns dados e veja como atingir seus resultados?
      </p>

      <div className="questions-one__buttons-container">
        <div className="questions-one__button">
          <InputCalculation placeholder="Idade:" />
        </div>

        <div className="questions-one__button">
          <InputCalculation placeholder="Altura:" />
        </div>

        <div className="questions-one__button">
          <InputCalculation placeholder="Peso:" />
        </div>

        <div className="questions-one__button">
          <InputCalculation placeholder="Peso desejado:" />
        </div>

        <div className="questions-one__button">
          <SubmitButton text="Calcular Dados" />
        </div>
      </div>

      <FooterQuestions link="/2-3" porcent="75%" />
    </div>
  );
};
