import "./styles.css";

interface SubmitButtonProps {
  text: string;
  name?: string;
  disabled?: boolean;
  marginBottom?: string;
  fontWeight?: string;
  fontSize?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const SubmitButton = ({
  text,
  name,
  type,
  disabled = false,
  marginBottom,
  fontWeight,
  fontSize,
  onClick,
}: SubmitButtonProps) => {
  return (
    <button
      className="submit-button__container"
      name={name}
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        marginBottom,
        fontWeight,
        fontSize,
      }}
    >
      {text}
    </button>
  );
};
