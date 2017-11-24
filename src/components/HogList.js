import React, { Component } from "react";
import HogTile from "./HogTile";

class HogList extends Component {
  // constructor() {
  //
  // }
  render() {
    const allHogs = this.props.hogs.map(hog => <HogTile data={hog} />);

    return <div className="ui grid container">{allHogs}</div>;
  }
}

export default HogList;
