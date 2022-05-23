import { Link } from "react-router-dom";
import { LogoKetoPro } from "../LogoKetoPro";

import "./styles.css";

export const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__sites">
          <Link to="/politica-de-privacidade" className="footer__link">
            Política de privacidade
          </Link>
          <Link to="/politica-de-privacidade" className="footer__link">
            Política de cookies
          </Link>
          <Link to="/termos-de-uso" className="footer__link">
            Termos de uso
          </Link>
        </div>

        <div className="footer__bar" />

        <LogoKetoPro />
      </div>

      <div className="footer__message">
        <p>
          Este site não é afiliado ao Facebook ou a qualquer entidade do
          Facebook. Depois que você sair do Facebook, a responsabilidade não é
          deles e sim do nosso site. Fazemos todos os esforços para indicar
          claramente e mostrar todas as provas do produto e usamos resultados
          reais. Nós não vendemos o seu e-mail ou qualquer informação para
          terceiros, jamais fazemos nenhum tipo de spam. Se você tiver alguma
          dúvida, sinta-se à vontade para usar o e-mail de contato e falar
          conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00.
          Lemos e respondemos todas as mensagens por ordem de chegada.
        </p>
      </div>

      <div className="footer__reserved-rights-container">
        <span className="footer__reserved-rights">
          2022 TODOS OS DIREITOS RESERVADOS Desenvolvido por Arq. Technology
        </span>
      </div>
    </>
  );
};
