import React, { Component } from "react";

class Filter extends Component {
  // constructor() {
  //
  // }

  render() {
    return (
      <form>
        <select>
          <option>Name</option>
          <option>Weight</option>
        </select>
        <input type="checkbox" />Greased Only?
      </form>
    );
  }
}

export default Filter;
