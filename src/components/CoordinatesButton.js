// Code CoordinatesButton Component Here

import React, { Component } from "react";

export default class CoordinatesButton extends Component {

 clickHandle = (e) => {
    const arr = [e.clientX, e.clientY]

    this.props.onReceiveCoordinates(arr)
 }

  render() {
    return (
      <div>
        <button onClick={this.clickHandle}> Mouse Coordinates</button>
      </div>
    );
  }
}
