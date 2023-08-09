import React from "react";
import WhatCustomersSay from "./components/WhatCustomersSay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      sayItems: [
        {
          id: 1,
          stars: 5,
          description:
            "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam.",
          name: "Michael Webb",
          category: "Customer",
          img: "michael-webb.jpg",
        },
        {
          id: 2,
          stars: 3,
          description:
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium iaculis ultricies. Aenean in leo vitae tortor.",
          name: "Amber Keene",
          category: "Customer",
          img: "amber-keene.jpg",
        },
        {
          id: 3,
          stars: 4,
          description:
            "Condimentum viverra orci. Pellentesque suscipit odio nisl, non ultricies purus mattis eget. In placerat, lorem a sodales ullamcorper, eros nibh laoreet nisl.",
          name: "Sarah Tarleton",
          category: "Customer",
          img: "sarah-tarleton.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <WhatCustomersSay sayItems={this.state.sayItems} />
      </div>
    );
  }
}
export default App;
