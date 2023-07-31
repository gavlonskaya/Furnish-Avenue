import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          img: "cozy-studio.jpg",
          title: "Cozy studio in Los Angeles",
          price: "1200",
          place: "2263 Southlea, Los Angeles",
          bathroom: "2",
          bedroom: "2",
          square: "840",
          category: "LA",
        },
        {
          id: 2,
          img: "tiny-home.jpg",
          title: "Tiny home in San Diego",
          price: "740000",
          place: "2569 Halls Corner, Las Vegas",
          bathroom: "1",
          bedroom: "2",
          square: "400",
          category: "LV",
        },
        {
          id: 3,
          img: "crown-house.jpg",
          title: "Crown house in New York",
          price: "980000",
          place: "4489 Smity Fielda, New York",
          bathroom: "2",
          bedroom: "3",
          square: "3200",
          category: "NY",
        },
        {
          id: 4,
          img: "family-house.jpg",
          title: "Family house Los Angeles",
          price: "4200",
          place: "2263 Southlea, Los Angeles",
          bathroom: "2",
          bedroom: "3",
          square: "1400",
          category: "LA",
        },
        {
          id: 5,
          img: "studio.jpg",
          title: "Studio in Las Vegas",
          price: "820000",
          place: "2569 Halls Corner, Las Vegas",
          bathroom: "2",
          bedroom: "3",
          square: "2400",
          category: "LV",
        },
        {
          id: 6,
          img: "story.jpg",
          title: "San Diego story",
          price: "3700",
          place: "2569 El Segundo, San Diego",
          bathroom: "1",
          bedroom: "2",
          square: "650",
          category: "SD",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
}
export default App;
