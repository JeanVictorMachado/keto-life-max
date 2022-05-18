import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalculator } from "react-icons/fa";
import { FooterQuestions } from "../../components/FooterQuestions";
import { GreenCircle } from "../../components/GreenCircle";
import { Header } from "../../components/Header";
import { InputCalculation } from "../../components/InputCalculation";
import { SubmitButton } from "../../components/SubmitButton";
import { validateInputs } from "../../helpers/validateInputs";

import "./styles.css";

interface ValidateErrorsProps {
  isAgeError: string;
  isHeightError: string;
  isWeightError: string;
  isDesiredWeightError: string;
}

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

  const validateErrors = ({
    isAgeError,
    isHeightError,
    isWeightError,
    isDesiredWeightError,
  }: ValidateErrorsProps) => {
    isAgeError.length > 0 && setAgeValue("");
    isHeightError.length > 0 && setHeightValue("");
    isWeightError.length > 0 && setWeightValue("");
    isDesiredWeightError.length > 0 && setDesiredWeightValue("");

    if (
      isAgeError.length === 0 &&
      isHeightError.length === 0 &&
      isWeightError.length === 0 &&
      isDesiredWeightError.length === 0
    ) {
      navigate("/");
    }
  };

  const handleErrorAndRedirect = () => {
    const isAgeError = validateInputs({
      inputName: "age",
      value: inputValues.age,
    });
    const isHeightError = validateInputs({
      inputName: "height",
      value: inputValues.height,
    });
    const isWeightError = validateInputs({
      inputName: "weight",
      value: inputValues.weight,
    });
    const isDesiredWeightError = validateInputs({
      inputName: "desiredWeight",
      value: inputValues.desiredWeight,
    });

    setAgeError(isAgeError);
    setHeightError(isHeightError);
    setWeightError(isWeightError);
    setDesiredWeightError(isDesiredWeightError);

    validateErrors({
      isAgeError,
      isHeightError,
      isWeightError,
      isDesiredWeightError,
    });
  };

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

    handleErrorAndRedirect();
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
