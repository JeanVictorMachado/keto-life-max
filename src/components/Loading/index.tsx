import { useEffect, useState } from "react";
import { LogoApple } from "../LogoApple";

import "./styles.css";

interface LoadingProps {
  isLogo?: boolean;
  isProcessing?: boolean;
}

export const Loading = ({
  isLogo = true,
  isProcessing = false,
}: LoadingProps) => {
  const [porcent, setPorcent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      porcent !== 100 && setPorcent(porcent + 1);
    }, 40);
  }, [porcent]);

  return (
    <div className="loading__container">
      <div
        className="wrapper"
        style={{
          top: `${isProcessing ? "50%" : isLogo ? "60%" : "50%"}`,
        }}
      >
        {isProcessing ? (
          <p className="loading__processing-porcent">{`${porcent}%`}</p>
        ) : (
          isLogo && (
            <div className="logo">
              <LogoApple />

              <p className="logo__text">
                Keto <p className="logo__text-life">Life</p>
                <p className="logo__text-max">MAX</p>
              </p>
            </div>
          )
        )}

        <div className="circle" />
        <div className="circle circle__2" />
        <div className="circle circle__3" />
        <div className="shadow" />
        <div className="shadow shadow__2" />
        <div className="shadow shadow__3" />

        {isProcessing && (
          <span className="loading__processing-text">Processando...</span>
        )}
      </div>
    </div>
  );
};
