import React from 'react';

export default class CoordinatesButton extends React.Component {

    render() {
        const { onReceiveCoordinates } = this.props;
        const clickFunc = (e) => onReceiveCoordinates([e.clientX, e.clientY]);
        return (
            <button onClick={(e) => clickFunc(e)}></button>)
    }
}