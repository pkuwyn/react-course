import React from "react";
import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";
const SignPage = () => {
  return (
    <div className="signpage">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignPage;
