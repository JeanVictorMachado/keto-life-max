import "./styles.css";

interface SubmitButtonProps {
  text: string;
  name?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const SubmitButton = ({
  text,
  name,
  type,
  disabled = false,
}: SubmitButtonProps) => {
  return (
    <button
      className="submit-button__container"
      name={name}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};