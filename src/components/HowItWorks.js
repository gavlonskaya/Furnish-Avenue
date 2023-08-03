import React, { Component } from "react";
import { MdHouse } from "react-icons/md";
import { MdReceipt } from "react-icons/md";
import { MdKey } from "react-icons/md";

export default function HowItWorks() {
  return (
    <div className="how-it-works">
      <div className="title">
        <h1>How It Works</h1>
        <h2>
          Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id
          efficitur pellentesque. Maecenas varius felis felis.
        </h2>
      </div>
      <div className="items">
        <div className="item">
          <div className="icon">
            <MdHouse />
          </div>
          <h2>Find property</h2>
          <h3>
            Odales mauris quis tellus facilisis, vel mattis magna interdum.
            Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.
          </h3>
        </div>
        <div className="item">
          <div className="icon">
            <MdReceipt />
          </div>
          <h2>Make a deal</h2>
          <h3>
            Pellentesque suscipit mauris. Nam dictum, erat a volutpat varius,
            urna nisi sollicitudin orci, sagittis facilisis odio tortor ac mi.
          </h3>
        </div>
        <div className="item">
          <div className="icon">
            <MdKey />
          </div>
          <h2>Get your keys</h2>
          <h3>
            Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum.
            Duis semper, metus vitae fermentum consequat.
          </h3>
        </div>
      </div>
    </div>
  );
}
