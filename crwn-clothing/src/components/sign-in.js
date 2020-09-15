import React, { useState } from "react";
import FormInput from "./form-input";
import CustomButton from "./custom-button";
import { signInWithGoogle } from "../firebase/firebase.utils";

const SignIn = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormValue({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="form sign-in">
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
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="submit"
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
