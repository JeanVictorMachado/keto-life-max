import { LogoKetoPro } from "../LogoKetoPro";

import "./styles.css";

interface HeaderProps {
  image: string;
  icon?: React.ReactNode;
}

export const Header = ({ image, icon }: HeaderProps) => {
  return (
    <>
      <div
        className="header-container"
        style={{
          height: !!icon ? "142px" : "98px",
          backgroundImage: `url(${image})`,
        }}
      />

      <div className="header__icon">{icon}</div>

      <div className="header__animate-bar" />

      <div className="header__logo-container">
        <LogoKetoPro />
      </div>
    </>
  );
};
