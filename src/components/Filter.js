import React, { Component } from "react";

class Filter extends Component {
  constructor() {
    super();
    this.handleGreasedChange = this.handleGreasedChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleGreasedChange(e) {
    this.props.onGreasedChange(e.target.checked);
  }
  handleFilterChange(e) {
    this.props.onFilterChange(e.target.value);
  }

  render() {
    const isGreased = this.props.isGreased;
    const filter = this.props.filter;
    return (
      <div>
        <form>
          <select value={filter} onChange={this.handleFilterChange}>
            <option value="" defaultValue>
              These Hogs Have No Filter
            </option>
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
