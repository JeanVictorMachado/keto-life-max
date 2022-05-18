import { ChangeEventHandler } from "react";

import "./styles.css";

interface InputCalculationProps {
  name?: string;
  type?: string;
  value: string;
  placeholder: string;
  error?: string;
  infoType?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const InputCalculation = ({
  name,
  type,
  value,
  infoType,
  error = "",
  placeholder,
  onChange,
}: InputCalculationProps) => {
  const gender = localStorage.getItem("@ketopro__gender:");

  console.log("error: ", error);

  return (
    <div className="input-calculation__container">
      <input
        className={`input-calculation__input ${
          error.length > 0 && value.length === 0
            ? "input-calculation__error-border-color"
            : gender === "male"
            ? "input-calculation__male"
            : "input-calculation__feminine"
        }`}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />

      {error.length > 0 && value.length === 0 && (
        <span className="input-calculation__error">{error}</span>
      )}

      {infoType && (
        <span className="input-calculation__info-type">{infoType}</span>
      )}
    </div>
  );
};
