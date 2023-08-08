import React from "react";
import Blog from "./components/Blog";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],

      blogItems: [
        {
          id: 1,
          img: "the-9-best-homes-in-new-york.jpg",
          title: "The 9 best homes in New York",
          date: "May 10, 2023",
          description:
            "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
          category: "Trends",
        },
        {
          id: 2,
          img: "how-to-easily-buy-a-house-with-realco.jpg",
          title: "How to easily buy a house with Realco",
          date: "May 10, 2023",
          description:
            "Praesent nec felis nisl. Phasellus eget lacus a metus fringilla fermentum sit amet.",
          category: "DIY",
        },
        {
          id: 3,
          img: "renting-houses-complete-guide.jpg",
          title: "Renting houses - complete guide",
          date: "May 10, 2023",
          description:
            "Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis.",
          category: "DIY",
        },
        {
          id: 4,
          img: "renting-houses-complete-guide.jpg",
          title: "Renting houses - complete guide",
          date: "May 10, 2023",
          description:
            "Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis.",
          category: "DIY",
        },
        {
          id: 5,
          img: "renting-houses-complete-guide.jpg",
          title: "Renting houses - complete guide",
          date: "May 10, 2023",
          description:
            "Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis.",
          category: "DIY",
        },
        {
          id: 6,
          img: "renting-houses-complete-guide.jpg",
          title: "Renting houses - complete guide",
          date: "May 10, 2023",
          description:
            "Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis.",
          category: "DIY",
        },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Blog blogItems={this.state.blogItems} />
      </div>
    );
  }
}
export default App;
