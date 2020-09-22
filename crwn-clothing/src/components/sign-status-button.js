import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";

import { connect } from "react-redux";

const SignStatusButton = ({ currentUser, styleClassName }) => {
  const handleClick = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  return currentUser ? (
    <a className={styleClassName} onClick={handleClick}>
      sign out
    </a>
  ) : (
    <Link className={styleClassName} to="sign">
      sign in
    </Link>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(SignStatusButton);
