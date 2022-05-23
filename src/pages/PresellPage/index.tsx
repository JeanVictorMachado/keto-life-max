import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { SubmitButton } from "../../components/SubmitButton";

import "./styles.css";

export const PresellPage = () => {
  const navigate = useNavigate();

  return (
    <div className="presell__container">
      <div className="home__header-box" />

      <div className="presell__content">
        <img
          src="green-check.png"
          alt="Green check logo"
          className="presell__green-check-img"
        />

        <span className="presell__attention-text">Atenção!</span>

        <div className="presell__title">
          <p>
            <strong>Conteúdo exclusivo</strong>, entenda porque você nâo
            consegue perder peso de forma definitiva.
          </p>
        </div>

        <SubmitButton text="ASSISTIR AGORA!" onClick={() => navigate("/pv")} />

        <img
          src="security-site.png"
          alt="Security site logo"
          className="presell__security-site-img"
        />
      </div>

      <Footer />
    </div>
  );
};
