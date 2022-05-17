import "./styles.css";

interface SubmitButtonProps {
  text: string;
  name?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const SubmitButton = ({ text, name, type }: SubmitButtonProps) => {
  return (
    <button className="submit-button__container" name={name} type={type}>
      {text}
    </button>
  );
};
