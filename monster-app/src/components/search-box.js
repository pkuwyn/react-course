import React from "react";

const SearchBox = (props) => {
  const { placeholder, handleChange, value } = props;
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};

export default SearchBox;
