// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {

    constructor(props){
        super(props)
    }

    delayFnc = (event) =>{
        event.persist()
        setTimeout(() =>{
          return  this.props.onDelayedClick(event) 
        },this.props.delay)
    }
    
 
    render() {
        return (
            <div>
                <button onClick={this.delayFnc}>delay</button>
            </div>
        )
    }
}

export default DelayedButton
