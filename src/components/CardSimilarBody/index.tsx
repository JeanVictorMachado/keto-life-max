import { useMemo } from "react";
import { SimilarBodyMenSVG } from "../SimilarBodyMenSVG";
import { SimilarBodyWomenSVG } from "../SimilarBodyWomenSVG";

import "./styles.css";

export const CardSimilarBody = () => {
  const gender = useMemo(() => {
    return localStorage.getItem("@ketopro__gender:");
  }, []);

  return (
    <div className="card-similar-body__container">
      <div className="card-similar-body__porcent-infos">
        <h1>94%</h1>

        <p>
          Pessoas semelhantes a você alcançaram os resultados desejados em menos
          de 4 semanas
        </p>
      </div>

      <div className="card-similar-body__body">
        {gender === "male" ? <SimilarBodyMenSVG /> : <SimilarBodyWomenSVG />}
      </div>
    </div>
  );
};
