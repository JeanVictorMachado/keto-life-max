import "./styles.css";

export const LogoKetoPro = () => {
  return (
    <div className="header__container-logo">
      <p className="header-title">
        Keto <p className="header-title-life">Life</p>
        <p className="header-title-max">MAX</p>
      </p>

      <img
        className="header__logo"
        src="images/logo-keto-pro.svg"
        alt="Logotipo Keto Life"
      />
    </div>
  );
};
