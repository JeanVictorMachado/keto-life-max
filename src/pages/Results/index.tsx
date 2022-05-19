import { useMemo } from "react";
import { Footer } from "../../components/Footer";
import { GreenCircleResult } from "../../components/GreenCircleResult";
import { Loading } from "../../components/Loading";
import { LogoKetoPro } from "../../components/LogoKetoPro";

import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { BiFace } from "react-icons/bi";

import "./styles.css";

export const Results = () => {
  const gender = useMemo(() => {
    return localStorage.getItem("@ketopro__gender:");
  }, []);

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
            <GreenCircleResult
              svg={
                gender === "male" ? (
                  <BiFace size={60} color="#606060" />
                ) : (
                  <MdOutlineFaceRetouchingNatural size={60} color="#606060" />
                )
              }
            />
          </div>

          <div className="results__content"></div>
          {/* 
          <Footer /> */}
        </div>
      )}
    </>
  );
};
