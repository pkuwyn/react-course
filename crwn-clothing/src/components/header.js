import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/svg/crown.svg";
// import { ReactComponent as DLogo } from "../assets/svg/globe.svg";

const Header = ({ catalog }) => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <Logo className="header__logo-svg" />
      </Link>

      {catalog.map(({ title, route }) => (
        <Link className="header__link" to={route}>
          {title}
        </Link>
      ))}
      <svg class="header__icon">
        <use href="sprite.svg#icon-location-shopping"></use>
      </svg>
      {/* <DLogo className="header__logo-svg" />

      <svg class="icon icon-trash">
        <use href="sprite.svg#icon-trash"></use>
      </svg> */}
    </header>
  );
};

export default Header;
