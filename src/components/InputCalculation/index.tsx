import { ChangeEventHandler } from "react";

import "./styles.css";

interface InputCalculationProps {
  name?: string;
  type?: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const InputCalculation = ({
  name,
  type,
  placeholder,
  onChange,
}: InputCalculationProps) => {
  const gender = localStorage.getItem("@ketopro__gender:");

  return (
    <input
      className={`input-calculation__container ${
        gender === "male"
          ? "input-calculation__male"
          : "input-calculation__feminine"
      }`}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
