// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

clickEvent = (event)=>{
  let eventData = [event.clientX,event.clientY]
  this.props.onReceiveCoordinates(eventData)

}


  render() {
    
    return (
        <button onClick={this.clickEvent}/>
      
    )
  }
}

export default CoordinatesButton

