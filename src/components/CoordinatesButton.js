// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  
    handleClick = (event) => {
        const array= [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(array)
    }
   
    render() {
    return (
    <div>
         <button onClick={this.handleClick}Coordinates></button>
   </div>
        )
    }
}
