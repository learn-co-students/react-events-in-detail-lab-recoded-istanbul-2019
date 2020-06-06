// Code CoordinatesButton Component Here
import React, {Component} from 'react';


export default class CoordinatesButton extends React.Component {

    getCoordinates  = (e) =>{
        let coordinates = [e.clientX, e.clientY];
        this.props.onReceiveCoordinates(coordinates);
      }

      render() {
        return (
          <div>
            <button onClick={this.getCoordinates} ></button>
          </div>
        );
      }
}

