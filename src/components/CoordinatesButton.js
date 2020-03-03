// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {

    button = (event) => {
        let coor = [event.clientX, event.clientY];
        return this.props.onReceiveCoordinates(coor);
    };

    render() {
    return <button onClick={this.button}></button>;
    }
  }