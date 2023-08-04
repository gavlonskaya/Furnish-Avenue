import React, { Component } from "react";

export class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <div className="content">
          <h1>Latest posts</h1>
          <h2>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Praesent efficitur nibh massa morbi sagittis
            ornare dui in ornare.
          </h2>
        </div>
        <div className="view-all-button">
          <button>View all</button>
        </div>
      </div>
    );
  }
}

export default Blog;
