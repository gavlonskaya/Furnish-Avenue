import React, { Component } from "react";
import BlogItem from "./BlogItem";

export class BlogItems extends Component {
  render() {
    return (
      <div className="blog-items">
        {this.props.blogItems.map((el) => (
          <BlogItem key={el.id} blogItem={el} />
        ))}
      </div>
    );
  }
}

export default BlogItems;
