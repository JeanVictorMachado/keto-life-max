import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalculator } from "react-icons/fa";
import { FooterQuestions } from "../../components/FooterQuestions";
import { GreenCircle } from "../../components/GreenCircle";
import { Header } from "../../components/Header";
import { InputCalculation } from "../../components/InputCalculation";
import { SubmitButton } from "../../components/SubmitButton";

import "./styles.css";

export const QuestionsThree = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState();

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValues((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("values: ", inputValues);

    navigate("/");
  };

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

      <form
        className="questions-one__buttons-container"
        onSubmit={handleSubmit}
      >
        <div className="questions-one__button">
          <InputCalculation
            name="age"
            placeholder="Idade:"
            onChange={handleChange}
          />
        </div>

        <div className="questions-one__button">
          <InputCalculation
            name="heght"
            placeholder="Altura:"
            onChange={handleChange}
          />
        </div>

        <div className="questions-one__button">
          <InputCalculation
            name="weight"
            placeholder="Peso:"
            onChange={handleChange}
          />
        </div>

        <div className="questions-one__button">
          <InputCalculation
            name="desiredWeight"
            placeholder="Peso desejado:"
            onChange={handleChange}
          />
        </div>

        <div className="questions-one__button">
          <SubmitButton text="Calcular Dados" type="submit" />
        </div>
      </form>

      <FooterQuestions link="/2-3" porcent="75%" />
    </div>
  );
};
