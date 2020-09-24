import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/svg/crown.svg";
import { connect } from "react-redux";

import SignStatusButton from "./sign-status-button";
import CartIcon from "./cart-icon";

// import { ReactComponent as DLogo } from "../assets/svg/globe.svg";
const Header = ({ catalog, user, currentUser }) => {
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
      <SignStatusButton styleClassName="header__link" />
      <CartIcon />
      {/* {JSON.stringify(currentUser)} */}
    </header>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
