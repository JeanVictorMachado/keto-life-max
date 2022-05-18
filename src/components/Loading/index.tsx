import { LogoApple } from "../LogoApple";

import "./styles.css";

interface LoadingProps {
  isLogo?: boolean;
}

export const Loading = ({ isLogo = true }: LoadingProps) => {
  return (
    <div className="loading__container">
      <div
        className="wrapper"
        style={{
          top: `${isLogo ? "60%" : "50%"}`,
        }}
      >
        {isLogo && (
          <div className="logo">
            <LogoApple />

            <p className="logo-text">
              Keto <p className="logo-text-pro">PRO</p>
            </p>
          </div>
        )}

        <div className="circle" />
        <div className="circle circle__2" />
        <div className="circle circle__3" />
        <div className="shadow" />
        <div className="shadow shadow__2" />
        <div className="shadow shadow__3" />
        {/* <span>Carregando</span> */}
      </div>
    </div>
  );
};
