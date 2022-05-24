import "./styles.css";

interface SalesButtonProps {
  textButton: string;
  redirectRoute: string;
  salesPriceText?: string;
}

export const SalesButton = ({
  textButton,
  redirectRoute,
  salesPriceText,
}: SalesButtonProps) => {
  return (
    <div className="sales-button__container">
      {salesPriceText && (
        <span className="sales-button__price">{salesPriceText}</span>
      )}

      <a href={redirectRoute} className="sales-button__button">
        {textButton}
      </a>

      <div className="sales-button__flags-cards-container">
        <div className="sales-button__flags-cards">
          <img
            src="images/mastercard-logo.png"
            alt="Logo master card"
            style={{
              width: "95%",
              height: "95%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="images/visa-logo.png"
            alt="Logo Visa card"
            style={{
              width: "100%",
              height: "65%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="images/elo-logo.png"
            alt="Logo Elo card"
            style={{
              width: "100%",
              height: "70%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="images/diners-logo.png"
            alt="Logo Diners card"
            style={{
              width: "80%",
              height: "90%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="images/hipercard-logo.png"
            alt="Logo Hipercard card"
            style={{
              width: "90%",
              height: "90%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="images/pix-logo.png"
            alt="Logo Pix card"
            style={{
              width: "95%",
              height: "60%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="images/boleto-logo.png"
            alt="Logo Boleto card"
            style={{
              width: "90%",
              height: "90%",
            }}
          />
        </div>
      </div>

      <div className="sales-button__security-page">
        <img
          src="images/checkout-image.webp"
          alt="Imagem  de segurança da página"
          style={{
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
