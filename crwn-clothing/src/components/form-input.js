import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-input">
      <input
        onChange={handleChange}
        {...otherProps}
        className="form-input__input"
      />
      {label ? (
        <label
          className={`form-input__label-${
            otherProps.value.length ? "shrink" : ""
          } form-input__label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
