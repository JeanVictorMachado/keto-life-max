import { useMemo } from "react";
import { CalculationImcSVG } from "../CalculationImcSVG";

import { obesityDegrees } from "../../helpers/obesityDegrees";

import "./styles.css";

interface CardCalculationImcProps {
  imcValue?: string;
}

export const CardCalculationImc = ({ imcValue }: CardCalculationImcProps) => {
  const obesityDegreesValue = useMemo(() => {
    return obesityDegrees(imcValue);
  }, [imcValue]);

  return (
    <div className="card-calculation-imc__container">
      <h1 className="card-calculation-imc__imc-title">
        O seu <p>IMC</p> atual
      </h1>

      <p className="card-calculation-imc__imc-result-text">
        {obesityDegreesValue}
      </p>

      <div className="card-calculation-imc__chart">
        <CalculationImcSVG imcValue={imcValue} />
      </div>

      <p className="card-calculation-imc__imc-recommended">
        Com base na OMS, o IMC recomendado é de <strong>22.5</strong> para estar
        dentro de uma faixa saudável
      </p>
    </div>
  );
};
