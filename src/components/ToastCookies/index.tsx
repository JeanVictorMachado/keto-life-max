import { Link } from "react-router-dom";

import "./styles.css";

interface ToastCookiesProps {
  closeToast: (param: boolean) => void;
}

export const ToastCookies = ({ closeToast }: ToastCookiesProps) => {
  return (
    <div className="toast-cookies__container">
      <span className="toast-cookies__title">Esse site utiliza cookies</span>

      <p className="toast-cookies__text">
        Usamos cookies para garantir uma melhor experiência de navegação, bem
        como cookies de rastreamento para entender como você interage com o
        nosso site.
      </p>

      <div className="toast-cookies__container-buttons">
        <Link
          className="toast-cookies__privacy-policy"
          to="/politica-de-privacidade"
        >
          Política de privacidade
        </Link>

        <div className="toast-cookies__privacy-policy-buttons">
          <button
            className="toast-cookies__button-accept"
            onClick={() => closeToast(false)}
          >
            Aceitar todos
          </button>
          <button
            className="toast-cookies__button-not-accept"
            onClick={() => closeToast(false)}
          >
            Não aceito
          </button>
        </div>
      </div>
    </div>
  );
};
