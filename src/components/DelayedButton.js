import React, { Component } from 'react';
export default class DelayedButton extends Component{
    onDelayButton  = (e) => {
      e.persist();
      setTimeout(() =>{this.props.onDelayedClick(e)}, this.props.delay)
    }
    render(){
      return(
        <div>
          <button onClick={this.onDelayButton}></button>
        </div>
      );
    }
}
