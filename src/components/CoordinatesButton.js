// Code CoordinatesButton Component Here
import React, { Component } from 'react';
export default class CoordinatesButton extends Component {

    // onClikHandeler = (event) => {
    //     // console.log(event.clientX)
    //     return Array(event.clientX, event.clientY)
    //     // let arr = [event.clientX, event.clientY]
    //     // // console.log(arr)
    //     // return arr
    // }
    // // 

    

    render() {
        return (
            <button onClick={ (event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])}>coordinatbtn</button>
        )
    }
}
