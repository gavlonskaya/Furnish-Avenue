import React, { Component } from "react";
import WhatCustomersSayItem from "./WhatCustomersSayItem";

export class WhatCustomersSay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="what-customers-say">
        <h1>What customers say</h1>
        <h2>Faucibus orci luctus et ultrices posuere cubilia curae.</h2>
        <div className="what-customers-say-items">
          {this.props.sayItems.map((el) => (
            <WhatCustomersSayItem key={el.id} sayItems={el} />
          ))}
        </div>
      </div>
    );
  }
}

export default WhatCustomersSay;
