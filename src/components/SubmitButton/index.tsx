import "./styles.css";

interface SubmitButtonProps {
  text: string;
}

export const SubmitButton = ({ text }: SubmitButtonProps) => {
  return <button className="submit-button__container">{text}</button>;
};
