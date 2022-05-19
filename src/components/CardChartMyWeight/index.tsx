import { ChartMyWeightSVG } from "../ChartMyWeightSVG";

import "./styles.css";

interface CardChartMyWeightProps {
  bodyWeight: string;
  currentWeight: string;
  desiredWeigh: string;
}

export const CardChartMyWeight = ({
  bodyWeight = "74Kg",
  currentWeight = "82Kg",
  desiredWeigh = "74Kg",
}: CardChartMyWeightProps) => {
  return (
    <>
      <h2>Meu Peso</h2>
      <div className="results__metrics-my-weight-msg">
        <p>Peso alcançável ao final das primeiras 4 semanas</p>
      </div>
      <span>{bodyWeight}</span>
      <div>
        <ChartMyWeightSVG
          currentWeight={currentWeight}
          desiredWeight={desiredWeigh}
        />
      </div>
    </>
  );
};
