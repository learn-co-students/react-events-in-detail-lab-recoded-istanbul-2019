import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: [0, 0],
    };
  }

  getCoordinates = (event) =>
    this.setState({ coordinates: [event.clientX, event.clientY] }, () =>
      this.props.onReceiveCoordinates(this.state.coordinates)
    );

  render() {
    return (
      <div>
        <button onClick={this.getCoordinates}></button>
      </div>
    );
  }
}
