import React from "react";
import theBestHouses from "../img/the-best-houses.jpg";
export default function TheBestHouses() {
  return (
    <div className="the-best-houses">
      <div className="the-best-houses__content">
        <div className="the-best-houses__right-content">
          <h1 className="the-best-houses__title">
            The best houses for family comfort
          </h1>
          <p className="the-best-houses__description">
            Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin
            sollicitudin, lorem non posuere blandit.
          </p>
          <div className="the-best-houses__container-button">
            <button className="the-best-houses__explore-properties">
              Explore properties
            </button>
            <button className="the-best-houses__contact-agent">
              Contact agent
            </button>
          </div>
        </div>
      </div>
      <img src={theBestHouses} className="the-best-houses__img" />
    </div>
  );
}
