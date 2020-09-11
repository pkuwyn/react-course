import React from "react";
import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";
const SignPage = () => {
  return (
    <div className="signpage">
      <SignIn />
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
};

const firebaseConfig = {
  apiKey: "AIzaSyCFHSQzrKetfqZevcGse5VbsTnSeYNIlvU",
  authDomain: "crwn-db-36c3f.firebaseapp.com",
  databaseURL: "https://crwn-db-36c3f.firebaseio.com",
  projectId: "crwn-db-36c3f",
  storageBucket: "crwn-db-36c3f.appspot.com",
  messagingSenderId: "422700471433",
  appId: "1:422700471433:web:2ac1d43ff70e7f4820a258",
};

export default SignPage;
