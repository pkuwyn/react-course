import React from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="menu">
        <div className="menu__item menu__item-1">
          <div className="menu__content">
            <h1 className="menu__title">HATS</h1>
            <span className="menu__subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu__item menu__item-2">
          <div className="menu__content">
            <h1 className="menu__title">Jackets</h1>
            <span className="menu__subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu__item menu__item-3">
          <div className="menu__content">
            <h1 className="menu__title">Sneakers</h1>
            <span className="menu__subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu__item menu__item-4">
          <div className="menu__content">
            <h1 className="menu__title">Women</h1>
            <span className="menu__subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu__item menu__item-5">
          <div className="menu__content">
            <h1 className="menu__title">Man</h1>
            <span className="menu__subtitle">Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
