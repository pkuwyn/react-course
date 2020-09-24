import React from "react";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { auth } from "../firebase/firebase.utils";
import { selectCurrentUser } from "../redux";
import { connect } from "react-redux";

const SignStatusButton = ({ currentUser, styleClassName }) => {
  const handleClick = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  return currentUser ? (
    <a className={styleClassName} onClick={handleClick} href="./">
      sign out
    </a>
  ) : (
    <Link className={styleClassName} to="signin">
      sign in
    </Link>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SignStatusButton);
