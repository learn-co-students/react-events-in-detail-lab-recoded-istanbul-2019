// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends React.Component {

    handleClick = (event) => {
        event.persist()
        console.log(event.type); // prints 'click'
        setTimeout(this.props.onDelayedClick, this.props.delay, event);
      }

    render() {
      return (
          <button onClick={this.handleClick}></button>
      );
    }
  }