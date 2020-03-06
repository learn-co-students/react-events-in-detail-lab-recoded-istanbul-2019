// Code CoordinatesButton Component Here
import React from "react"

export default class CoordinatesButton  extends React.Component{
  handleOnClick =(event)=>{
    let x=event.clientX;
    let y=event.clientY;
    return onReceiveCoordinates(x,y)
    
  }
  render(){
    return(
      <button onClick={this.handleOnClick}></button>
      
      )
  }
}
