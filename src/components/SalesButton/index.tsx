import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import "./styles.css";

interface SalesButtonProps {
  textButton: string;
}

export const SalesButton = ({ textButton }: SalesButtonProps) => {
  return (
    <div className="sales-button__container">
      <button className="sales-button__button">{textButton}</button>
    </div>
  );
};
