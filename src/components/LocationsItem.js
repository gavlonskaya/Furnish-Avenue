import React, { Component } from "react";
import { MdOutlineChevronRight } from "react-icons/md";

export class LocationsItem extends Component {
  render() {
    return (
      <div className="locations-item">
        <h1>
          {this.props.locationsItems.city}, {this.props.locationsItems.state}
        </h1>
        <button className="view-properties">
          View Properties <MdOutlineChevronRight />
        </button>
      </div>
    );
  }
}

export default LocationsItem;