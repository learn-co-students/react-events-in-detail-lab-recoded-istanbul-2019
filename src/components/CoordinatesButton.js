// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    // clickFun() {
    //     this.props.onReceiveCoordinates[]
    // }
    render() {
        return (
            <div>
                <button onClick={(event)=> this.props.onReceiveCoordinates([event.clientX,event.clientY])}>Coordinates Button</button>
            </div>
        )
    }
}
