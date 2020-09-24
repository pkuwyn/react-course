import React, { useState } from "react";
import FormInput from "./form-input";
import CustomButton from "./custom-button";
import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
} from "../firebase/firebase.utils";

const SignUp = () => {
  const [formValue, setFormValue] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = formValue;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setFormValue({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
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
          type="text"
          name="displayName"
          value={formValue.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={formValue.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit" className="hover-scale-button">
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
