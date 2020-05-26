import React, { Component } from 'react';
export default class CoordinatesButton extends Component{
    getCoords  = (e) =>{
      let coordinates = [e.clientX, e.clientY];
      this.props.onReceiveCoordinates(coordinates);
    }
    render(){
      return(
        <div>
          <button onClick={this.getCoords}></button>
        </div>
      );
    }
}
