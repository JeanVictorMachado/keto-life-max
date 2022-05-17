import "./styles.css";

interface InputCalculationProps {
  placeholder: string;
}

export const InputCalculation = ({ placeholder }: InputCalculationProps) => {
  const gender = localStorage.getItem("@ketopro__gender:");

  return (
    <input
      className={`input-calculation__container ${
        gender === "male"
          ? "input-calculation__male"
          : "input-calculation__feminine"
      }`}
      placeholder={placeholder}
    />
  );
};
