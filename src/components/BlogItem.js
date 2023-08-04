import React, { Component } from "react";
import { MdOutlineChevronRight } from "react-icons/md";

export class BlogItem extends Component {
  render() {
    return (
      <div className="blog-item">
        <img
          src={"./img/" + this.props.blogItem.img}
          alt={this.props.blogItem.title}
        />
        <div className="category-date">
          <p className="category">{this.props.blogItem.category}</p>
          <p className="date">{this.props.blogItem.date}</p>
        </div>
        <h1>{this.props.blogItem.title}</h1>
        <h2>{this.props.blogItem.description}</h2>
        <button className="read-more">
          Read more <MdOutlineChevronRight />
        </button>
      </div>
    );
  }
}

export default BlogItem;
