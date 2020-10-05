import React from "react";
import { useHistory } from "react-router-dom";

const MenuItem = ({ title, size, imageUrl, linkUrl }) => {
  let history = useHistory();
  const handleClick = () => {
    history.push(`/shop/${linkUrl}`);
  };
  return (
    <div className="menu__item" onClick={handleClick}>
      <div
        className="menu__bgimage"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url(${imageUrl})`,
        }}
      ></div>
      <div className="menu__content">
        <h1 className="menu__title">{title}</h1>
        <span className="menu__subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
