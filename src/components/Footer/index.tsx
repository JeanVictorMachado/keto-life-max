import { Link } from "react-router-dom";
import { LogoKetoPro } from "../LogoKetoPro";

import "./styles.css";

export const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__sites">
          <Link to="#" className="footer__link">
            Política de privacidade
          </Link>
          <Link to="#" className="footer__link">
            Política de cookies
          </Link>
          <Link to="#" className="footer__link">
            Termos de uso
          </Link>
        </div>

        <LogoKetoPro />
      </div>

      <div className="footer__reserved-rights-container">
        <span className="footer__reserved-rights">
          2022 TODOS OS DIREITOS RESERVADOS Desenvolvido por Arq. Technology
        </span>
      </div>
    </>
  );
};
