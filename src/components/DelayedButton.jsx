// Code DelayedButton Component Here
import React from 'react';

 class DelayedButton extends React.Component {
   handleClick = function(event){
     event.persist();
     this.setTimeout = this.props.onDelayedClick(event);
     this.props.delay;
   }.bind(this);

   render() {
     return <button onClick={this.handleClick}>Delayed</button>;
   }
 }

 export default DelayedButton;