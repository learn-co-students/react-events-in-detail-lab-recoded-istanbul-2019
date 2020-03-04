// Code CoordinatesButton Component Here
import React, { Component } from 'react';
class CoordinatesButton extends Component {

  
  render() {
    return (
    <button onClick={e=>this.props.onReceiveCoordinates([e.clientX,e.clientY])}>button</button>
    )
  }
}
export default CoordinatesButton; 