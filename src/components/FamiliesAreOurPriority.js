import React from "react";
import { MdFamilyRestroom } from "react-icons/md";

export default function FamiliesAreOurPriority() {
  return (
    <div className="families-are-our-priority">
      <div className="families-are-our-priority__icon">
        <MdFamilyRestroom />
      </div>
      <div className="families-are-our-priority__title title">
        Families are our priority
      </div>
      <div className="families-are-our-priority__title text">
        Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non,
        placerat vel arcu. In non consectetur lorem. Morbi non varius sapien
        suscipit mauri.
      </div>
      <button className="families-are-our-priority__button">Get started</button>
    </div>
  );
}
