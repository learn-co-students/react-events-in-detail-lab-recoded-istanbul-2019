import React from 'react';

export default class DelayedButton extends React.Component {
  handleClick = event => {
    // const storedEvent = event.target;
    event.persist();
    setTimeout(this.props.onDelayedClick, this.props.delay, event);
  }

  render() {
    return <button onClick={this.handleClick}>Delayed</button>
  }
}