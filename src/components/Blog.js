import React, { Component } from "react";
import BlogItem from "./BlogItem";

export class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
    };
  }
  render() {
    const { blogItems } = this.props;
    const { showAll } = this.state;

    let displayedItems = showAll ? blogItems : blogItems.slice(0, 3);

    return (
      <div className="blog">
        <div className="blog__header">
          <div className="blog__title title">Latest posts</div>
          <div className="blog__title text">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Praesent efficitur nibh massa morbi sagittis
            ornare dui in ornare.
          </div>
          <button
            className="blog__button"
            onClick={() => this.setState({ showAll: true })}
          >
            View all
          </button>
        </div>

        <div className="blog__items">
          {displayedItems.map((el) => (
            <BlogItem key={el.id} blogItem={el} />
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
