import React from "react";
import Locations from "./components/Locations";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      locationsItems: [
        {
          id: 1,
          city: "San Francisco",
          state: "CA",
        },
        {
          id: 2,
          city: "Los Angeles",
          state: "CA",
        },
        {
          id: 3,
          city: "San Diego",
          state: "CA",
        },
        {
          id: 4,
          city: "New York",
          state: "NY",
        },
        {
          id: 5,
          city: "Las Vegas",
          state: "NV",
        },
        {
          id: 6,
          city: "Miami",
          state: "FL",
        },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Locations locationsItems={this.state.locationsItems} />
      </div>
    );
  }
}
export default App;
