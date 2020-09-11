import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/svg/crown.svg";

import SignStatusButton from "./sign-status-button";
// import { ReactComponent as DLogo } from "../assets/svg/globe.svg";

const Header = ({ catalog, user }) => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <Logo className="header__logo-svg" />
      </Link>
      {catalog.map(({ title, route }) => (
        <Link className="header__link" to={route} key={route}>
          {title}
        </Link>
      ))}
      <SignStatusButton user={user} styleClassName="header__link" />
      <svg className="header__icon">
        <use href="sprite.svg#icon-location-shopping"></use>
      </svg>

      {user ? <img src={user.photoURL} alt="" className="header__img" /> : null}
      {/* <DLogo className="header__logo-svg" />

      <svg class="icon icon-trash">
        <use href="sprite.svg#icon-trash"></use>
      </svg> */}
    </header>
  );
};

export default Header;
