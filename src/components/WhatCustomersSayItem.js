import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";

export class WhatCustomersSayItem extends Component {
  render() {
    const { stars } = this.props.sayItems;
    const starIcons = Array.from({ length: stars }, (_, index) => (
      <AiFillStar key={index} />
    ));
    return (
      <div className="say-item">
        <div className="stars">{starIcons}</div>
        <h1>"{this.props.sayItems.description}"</h1>
        <div className="content">
          <img
            src={"./img/" + this.props.sayItems.img}
            alt={this.props.sayItems.title}
          />
          <div className="right-congtent">
            <h2>{this.props.sayItems.name}</h2>
            <p>{this.props.sayItems.category}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatCustomersSayItem;
