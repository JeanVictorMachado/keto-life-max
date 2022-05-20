import "./styles.css";

export const LogoKetoPro = () => {
  return (
    <div className="header__container-logo">
      <img
        className="header__logo"
        src="logo-keto-pro.svg"
        alt="Logotipo Keto Life"
      />

      <div>
        <p className="header-title">
          Keto <p className="header-title-pro">Life</p>
        </p>

        <span className="header-logo-sub-title">EMAGREÇA COM SAÚDE</span>
      </div>
    </div>
  );
};
