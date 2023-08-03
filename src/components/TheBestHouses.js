import React from "react";
import theBestHouses from "../img/the-best-houses.jpg";

export default function TheBestHouses() {
  return (
    <div className="the-best-houses">
      <div className="content">
        <div className="right-content">
          <h1>The best houses for family comfort</h1>
          <p>
            Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin
            sollicitudin, lorem non posuere blandit.
          </p>
          <div className="container-button">
            <button className="explore-properties">Explore properties</button>
            <button className="contact-agent">Contact agent</button>
          </div>
        </div>
      </div>
      <img src={theBestHouses} className="img" />
    </div>
  );
}
