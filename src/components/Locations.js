import React, { Component } from "react";
import LocationsItem from "./LocationsItem";
import { MdOutlineChevronRight } from "react-icons/md";

export class Locations extends Component {
  render() {
    return (
      <div className="locations">
        <h1>Locations</h1>
        <h2>
          Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer
          lacus urna, aliquet non nisl sit amet.
        </h2>
        <div className="locations-items">
          {this.props.locationsItems.map((el) => (
            <LocationsItem key={el.id} locationsItems={el} />
          ))}
        </div>
        <div className="button-locations">
          <button>Explore properties</button>
          <button className="сontact-agent">
            Contact agent <MdOutlineChevronRight />
          </button>
        </div>
      </div>
    );
  }
}
export default Locations;
