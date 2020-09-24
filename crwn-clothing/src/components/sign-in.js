import React, { useState } from "react";
import FormInput from "./form-input";
import CustomButton from "./custom-button";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";

const SignIn = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formValue;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormValue({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="form">
      <h2 className="form__title">I already have an account</h2>
      <span className="form__desp">Sign in with your email and password</span>

      <form onSubmit={handleSubmit} className="u-margin-top-sm">
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={formValue.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={formValue.password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="parallel">
          <CustomButton type="submit" className="hover-scale-button">
            {" "}
            Sign in{" "}
          </CustomButton>
          <CustomButton
            className="hover-scale-button"
            type="button"
            style={{
              backgroundColor: "rgb(66, 133, 244)",
            }}
            onClick={signInWithGoogle}
          >
            Sign with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
