import React, { Component } from "react";

class Filter extends Component {
  constructor() {
    super();
    this.handleGreasedChange = this.handleGreasedChange.bind(this);
  }

  handleGreasedChange(e) {
    this.props.onGreasedChange(e.target.checked);
  }

  render() {
    const isGreased = this.props.isGreased;
    return (
      <div>
        <form>
          <select>
            <option value="none">These Hogs Have No Filter</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
          <input
            type="checkbox"
            checked={isGreased}
            onChange={this.handleGreasedChange}
          />Greased Only?
        </form>
        <p />
        <p />
      </div>
    );
  }
}

export default Filter;
