import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">Furnish Avenue</span>
        <ul className="nav">
          <li>Home</li>
          <li>Properties</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
