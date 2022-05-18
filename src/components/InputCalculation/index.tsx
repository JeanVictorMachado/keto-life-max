import { ChangeEventHandler, useMemo } from "react";

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
  const gender = useMemo(() => {
    return localStorage.getItem("@ketopro__gender:");
  }, []);

  const isError = useMemo(() => {
    if (error?.length > 0) {
      return true;
    }

    return false;
  }, [error]);

  return (
    <div className="input-calculation__container">
      <input
        className={`input-calculation__input ${
          isError
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

      {isError && <span className="input-calculation__error">{error}</span>}

      {infoType && (
        <span className="input-calculation__info-type">{infoType}</span>
      )}
    </div>
  );
};
