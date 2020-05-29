// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  render() {
    return (
      <button
        onClick={(click) =>
          this.props.onReceiveCoordinates([click.clientX, click.clientY])
        }
      >
        Click here
      </button>
    );
  }
}

export default CoordinatesButton;
