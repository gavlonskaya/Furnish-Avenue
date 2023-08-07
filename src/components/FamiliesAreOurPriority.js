import React from "react";
import { MdFamilyRestroom } from "react-icons/md";

export default function FamiliesAreOurPriority() {
  return (
    <div className="families-are-our-priority">
      <div className="icon">
        <MdFamilyRestroom />
      </div>
      <h1>Families are our priority</h1>
      <h2>
        Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non,
        placerat vel arcu. In non consectetur lorem. Morbi non varius sapien
        suscipit mauri.
      </h2>
      <button>Get started</button>
    </div>
  );
}