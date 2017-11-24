import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import hogs from "../porkers_data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isGreased: false,
      filter: "none"
    };
    this.handleGreasedChange = this.handleGreasedChange.bind(this);
  }

  handleGreasedChange(isGreased) {
    this.setState({ isGreased: isGreased });
    console.log("this pig", this.state.isGreased);
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Filter
          onGreasedChange={this.handleGreasedChange}
          isGreased={this.state.isGreased}
          filter={this.state.filter}
        />
        <HogList hogs={hogs} />
      </div>
    );
  }
}

export default App;
