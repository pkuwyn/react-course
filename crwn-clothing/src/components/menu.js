import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "./menu-item";

function Menu(props) {
  const { sections } = useSelector(
    createStructuredSelector({
      sections: selectDirectorySections,
    })
  );
  return (
    <>
      <div className="menu">
        {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    </>
  );
}

export default Menu;
