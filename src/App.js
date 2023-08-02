import React from "react";
import LatestPosts from "./components/LatestPosts";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <LatestPosts />
      </div>
    );
  }
}

export default App;