import { useMemo } from "react";
import { BodyMenChangeSVG } from "../BodyMenChangeSVG";
import { BodyWomenChangeSVG } from "../BodyWomenChangeSVG";

import "./styles.css";

export const CardBodyChange = () => {
  const gender = useMemo(() => {
    return localStorage.getItem("@ketopro__gender:");
  }, []);

  return (
    <div className="results__svg-card-container">
      <h2>Estimativa de mudança corporal</h2>

      <div className="results__svg-container">
        <div className="results__svg-personal">
          {gender === "male" ? <BodyMenChangeSVG /> : <BodyWomenChangeSVG />}
        </div>

        <div className="results__infos-personal">
          <span>
            7%<p>Pescoço</p>
          </span>

          <span>
            12%<p>Braços</p>
          </span>

          <span>
            42%<p>Cintura</p>
          </span>

          <span>
            23%<p>Lados</p>
          </span>

          <span>
            16%<p>Coxas</p>
          </span>
        </div>
      </div>

      <span className="results__text-botton">
        Com base no sucesso de outros usuários com o mesmo tipo metabólico
      </span>
    </div>
  );
};
