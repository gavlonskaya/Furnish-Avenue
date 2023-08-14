import React, { Component } from "react";
import { MdOutlineChevronRight } from "react-icons/md";

export class BlogItem extends Component {
  render() {
    return (
      <div className="blog-item">
        <div className="blog-item__icon">
          <img
            src={"./img/" + this.props.blogItem.img}
            alt={this.props.blogItem.title}
          />
        </div>

        <div className="blog-item__header">
          <div className="blog-item__category">
            {this.props.blogItem.category}
          </div>
          <div className="blog-item__date">{this.props.blogItem.date}</div>
        </div>
        <div className="blog-item__text">
          <div className="blog-item__title">{this.props.blogItem.title}</div>
          <div className="blog-item__description">
            {this.props.blogItem.description}
          </div>
          <button className="blog-item__button">
            Read more <MdOutlineChevronRight />
          </button>
        </div>
      </div>
    );
  }
}

export default BlogItem;
