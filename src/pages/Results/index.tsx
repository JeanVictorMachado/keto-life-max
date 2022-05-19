import { Footer } from "../../components/Footer";
import { GreenCircleResult } from "../../components/GreenCircleResult";
import { Loading } from "../../components/Loading";
import { LogoKetoPro } from "../../components/LogoKetoPro";

import "./styles.css";

export const Results = () => {
  return (
    <>
      {false ? (
        <Loading />
      ) : (
        <div className="results__comtainer">
          <div className="results__logo-container">
            <LogoKetoPro />
          </div>

          <div className="results__green-circle-container">
            <GreenCircleResult />
          </div>

          <div className="results__content"></div>
          {/* 
          <Footer /> */}
        </div>
      )}
    </>
  );
};
