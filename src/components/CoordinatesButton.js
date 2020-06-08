// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {

    render() {
        return (
            <div>
                <button onClick={(e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])}>CoordinatesButton</button>
            </div>
        )
    }
}

export default CoordinatesButton