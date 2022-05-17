import { LogoApple } from "../LogoApple";
import "./styles.css";

export const Loading = () => {
  return (
    <div className="loading__container">
      <div className="wrapper">
        <div className="logo">
          <LogoApple />

          <p className="logo-text">
            Keto <p className="logo-text-pro">PRO</p>
          </p>
        </div>
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="shadow" />
        <div className="shadow" />
        <div className="shadow" />
        {/* <span>Carregando</span> */}
      </div>
    </div>
  );
};
