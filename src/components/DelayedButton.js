// Code DelayedButton Component Here
import React from "react"

export default class DelayedButton extends React.Component{
    
    onDelayedClick=(event)=>{
    
    return setTimeOut( ()=>{
      
    },this.props.delay)
  }
  // delay=this.onDelayedClick
  render(){
    return(
      <button onClick={this.onDelayedClick}> </button>
      
      )
  }
}