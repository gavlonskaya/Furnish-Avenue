import React from "react";
import logoipsum1 from "../img/logoipsum-1.jpg";
import logoipsum2 from "../img/logoipsum-2.jpg";
import logoipsum3 from "../img/logoipsum-3.jpg";
import logoipsum4 from "../img/logoipsum-4.jpg";
import logoipsum5 from "../img/logoipsum-5.jpg";

export default function MagazinesAndMedia() {
  return (
    <div className="magazines-and-media">
      <h1 className="magazines-and-media__title">
        As seen on the world's best
        <br />
        magazines and media
      </h1>
      <img
        className="magazines-and-media__logo"
        src={logoipsum1}
        alt="logoipsum"
      />
      <img
        className="magazines-and-media__logo"
        src={logoipsum2}
        alt="logoipsum"
      />
      <img
        className="magazines-and-media__logo"
        src={logoipsum3}
        alt="logoipsum"
      />
      <img
        className="magazines-and-media__logo"
        src={logoipsum4}
        alt="logoipsum"
      />
      <img
        className="magazines-and-media__logo"
        src={logoipsum5}
        alt="logoipsum"
      />
    </div>
  );
}
