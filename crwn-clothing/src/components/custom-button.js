import React from "react";

const CustomButton = ({ children, className, ...otherProps }) => (
  <button className={`custom-button ${className}`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
