import React, { Component } from "react";
import { FaBath } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";
import { FaRulerVertical } from "react-icons/fa6";

class Item extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title} />
        <h2>{this.props.item.title}</h2>
        <h3>$ {this.props.item.price} USD</h3>
        <p>{this.props.item.place}</p>
        <b>
          <FaBath /> {this.props.item.bathroom}
        </b>
        <b>
          <IoIosBed /> {this.props.item.bedroom}
        </b>
        <b>
          <FaRulerVertical /> {this.props.item.square} sqft
        </b>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
      </div>
    );
  }
}

export default Item;
