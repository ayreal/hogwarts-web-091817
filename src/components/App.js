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
      filter: "name"
    };
    this.handleGreasedChange = this.handleGreasedChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleGreasedChange(isGreased) {
    this.setState({ isGreased: isGreased });
    // console.log("this pig", this.state.isGreased);
  }
  handleFilterChange(filter) {
    this.setState({ filter: filter });
    // console.log("this pig", this.state.filter);
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Filter
          onGreasedChange={this.handleGreasedChange}
          onFilterChange={this.handleFilterChange}
          isGreased={this.state.isGreased}
          filter={this.state.filter}
        />
        <HogList hogs={hogs} />
      </div>
    );
  }
}

export default App;
