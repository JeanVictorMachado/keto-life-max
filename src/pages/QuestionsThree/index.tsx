import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalculator } from "react-icons/fa";
import { FooterQuestions } from "../../components/FooterQuestions";
import { GreenCircle } from "../../components/GreenCircle";
import { Header } from "../../components/Header";
import { InputCalculation } from "../../components/InputCalculation";
import { SubmitButton } from "../../components/SubmitButton";

import "./styles.css";
import { validateInputs } from "../../helpers/validateInputs";

interface InputValuesProps {
  age: string;
  height: string;
  weight: string;
  desiredWeight: string;
}

export const QuestionsThree = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({} as InputValuesProps);

  const [ageError, setAgeError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [desiredWeightError, setDesiredWeightError] = useState("");

  const [ageValue, setAgeValue] = useState("");
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [desiredWeightValue, setDesiredWeightValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    name === "age" && setAgeValue(value);
    name === "age" && setAgeError("");

    name === "height" && setHeightValue(value);
    name === "height" && setHeightError("");

    name === "weight" && setWeightValue(value);
    name === "weight" && setWeightError("");

    name === "desiredWeight" && setDesiredWeightValue(value);
    name === "desiredWeight" && setDesiredWeightError("");

    setInputValues((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setAgeError(
      validateInputs({
        inputName: "age",
        value: inputValues.age,
      })
    );
    setHeightError(
      validateInputs({
        inputName: "height",
        value: inputValues.height,
      })
    );
    setWeightError(
      validateInputs({
        inputName: "weight",
        value: inputValues.weight,
      })
    );
    setDesiredWeightError(
      validateInputs({
        inputName: "desiredWeight",
        value: inputValues.desiredWeight,
      })
    );
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
            value={ageValue}
            error={ageError}
            onChange={handleChange}
          />
        </div>

        <div className="questions-one__button">
          <InputCalculation
            name="height"
            placeholder="Altura:"
            infoType="cm"
            value={heightValue}
            error={heightError}
            onChange={handleChange}
          />
        </div>

        <div className="questions-one__button">
          <InputCalculation
            name="weight"
            placeholder="Peso:"
            infoType="Kg"
            value={weightValue}
            error={weightError}
            onChange={handleChange}
          />
        </div>

        <div className="questions-one__button">
          <InputCalculation
            name="desiredWeight"
            placeholder="Peso desejado:"
            infoType="Kg"
            value={desiredWeightValue}
            error={desiredWeightError}
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
