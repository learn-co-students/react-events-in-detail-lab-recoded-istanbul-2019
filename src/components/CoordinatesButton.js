
// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <button onClick = {(e) =>{
                     const arr = [e.clientX , e.clientY]
                     this.props.onReceiveCoordinates(arr) 
                }} >CoordinatesButton</button>
                
            </div>
        )
    }
}

export default CoordinatesButton