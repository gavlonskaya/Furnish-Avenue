import React, { Component } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import Item from "./Item";

class Items extends Component {
  render() {
    return (
      <div className="items">
        <div className="items-card">
          {this.props.items.map((el) => (
            <Item key={el.id} item={el} onAdd={this.props.onAdd} />
          ))}
        </div>
        <div className="button-items">
          <button>Explore properties</button>
          <button className="button-сontact-agent">
            Contact agent <MdOutlineChevronRight />
          </button>
        </div>
      </div>
    );
  }
}

export default Items;
