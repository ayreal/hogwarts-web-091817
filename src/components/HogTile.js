import React from "react";

function handleClick(e) {
  console.log("clicked", e.target);
}

const HogTile = props => {
  return (
    <div className="ui eight wide column">
      <div className="ui fluid card" onClick={handleClick}>
        <div className="image">
          <img src="https://i.ytimg.com/vi/-eMV1jxfl40/hqdefault.jpg" alt="" />
        </div>
        <div className="content">
          <a className="header">{props.data.name}</a>
        </div>
      </div>
    </div>
  );
};

export default HogTile;
