import { CalculationImcSVG } from "../CalculationImcSVG";

import "./styles.css";

export const CardCalculationImc = () => {
  return (
    <div className="card-calculation-imc__container">
      <h1 className="card-calculation-imc__imc-title">
        O seu <p>IMC</p> atual
      </h1>

      <p className="card-calculation-imc__imc-result-text">Acima do peso</p>

      <div className="card-calculation-imc__chart">
        <CalculationImcSVG />
      </div>

      <p className="card-calculation-imc__imc-recommended">
        Com base na OMS, o IMC recomendado é de <strong>22.5</strong> para estar
        dentro de uma faixa saudável
      </p>
    </div>
  );
};
