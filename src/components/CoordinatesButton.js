// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    createTwoArray = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])

    }
    render() {
        return (<button onClick={this.createTwoArray}>click to die</button>)
    }
}

export default CoordinatesButton;