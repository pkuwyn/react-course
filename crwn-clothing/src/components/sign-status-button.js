import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";

const SignStatusButton = ({ user, styleClassName }) => {
  const handleClick = (e) => {
    e.preventDefault();
    auth.signOut();
    console.log("logout");
  };

  return user ? (
    <a className={styleClassName} onClick={handleClick}>
      sign out
    </a>
  ) : (
    <Link className={styleClassName} to="sign">
      sign in
    </Link>
  );
};

export default SignStatusButton;
