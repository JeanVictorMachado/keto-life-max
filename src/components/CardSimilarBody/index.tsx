import { SimilarBodySVG } from "../SimilarBodySVG";

import "./styles.css";

export const CardSimilarBody = () => {
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
        <SimilarBodySVG />
      </div>
    </div>
  );
};
