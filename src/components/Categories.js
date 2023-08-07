import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "LA",
          name: "Los Angeles",
        },
        {
          key: "LV",
          name: "Las Vegas",
        },
        {
          key: "NY",
          name: "New York",
        },
        {
          key: "SD",
          name: "San Diego",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div
            key={el.key}
            onClick={() => {
              this.props.chooseCategory(el.key);
              this.setState({ activeCategory: el.key });
            }}
            className={this.state.activeCategory === el.key ? "active" : ""}
          >
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
