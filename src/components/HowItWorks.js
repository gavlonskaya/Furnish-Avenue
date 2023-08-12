import React from "react";
import { MdHouse } from "react-icons/md";
import { MdReceipt } from "react-icons/md";
import { MdKey } from "react-icons/md";

export default function HowItWorks() {
  return (
    <div className="how-it-works">
      <div className="how-it-works__title">
        <h1 className="how-it-works__title-heading">How It Works</h1>
        <h2 className="how-it-works__title-subheading">
          Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id
          efficitur pellentesque. Maecenas varius felis felis.
        </h2>
      </div>
      <div className="how-it-works__items">
        <div className="how-it-works__item">
          <div className="how-it-works__item-icon">
            <MdHouse className="how-it-works__item-icon-svg" />
          </div>
          <h2 className="how-it-works__item-heading">Find property</h2>
          <h3 className="how-it-works__item-subheading">
            Odales mauris quis tellus facilisis, vel mattis magna interdum.
            Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.
          </h3>
        </div>
        <div className="how-it-works__item">
          <div className="how-it-works__item-icon">
            <MdReceipt className="how-it-works__item-icon-svg" />
          </div>
          <h2 className="how-it-works__item-heading">Make a deal</h2>
          <h3 className="how-it-works__item-subheading">
            Pellentesque suscipit mauris. Nam dictum, erat a volutpat varius,
            urna nisi sollicitudin orci, sagittis facilisis odio tortor ac mi.
          </h3>
        </div>
        <div className="how-it-works__item">
          <div className="how-it-works__item-icon">
            <MdKey className="how-it-works__item-icon-svg" />
          </div>
          <h2 className="how-it-works__item-heading">Get your keys</h2>
          <h3 className="how-it-works__item-subheading">
            Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum.
            Duis semper, metus vitae fermentum consequat.
          </h3>
        </div>
      </div>
    </div>
  );
}
