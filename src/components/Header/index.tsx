import { LogoKetoPro } from "../LogoKetoPro";

import "./styles.css";

interface HeaderProps {
  image: string;
}

export const Header = ({ image }: HeaderProps) => {
  return (
    <>
      <div
        className="header-container"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      <div className="header__animate-bar" />

      <div className="header__logo-container">
        <LogoKetoPro />
      </div>
    </>
  );
};
