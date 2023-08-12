import React, { Component } from "react";
import LocationsItem from "./LocationsItem";
import { MdOutlineChevronRight } from "react-icons/md";

export class Locations extends Component {
  render() {
    return (
      <div className="locations">
        <h1 className="locations__title">Locations</h1>
        <h2 className="locations__subtitle">
          Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer
          lacus urna, aliquet non nisl sit amet.
        </h2>
        <div className="locations__items">
          {this.props.locationsItems.map((el) => (
            <LocationsItem key={el.id} locationsItems={el} />
          ))}
        </div>
        <div className="locations__buttons">
          <button className="locations__button">Explore properties</button>
          <button className="locations__button locations__button--contact-agent">
            Contact agent <MdOutlineChevronRight className="locations__button-icon" />
          </button>
        </div>
      </div>
    );
  }
}

export default Locations;
