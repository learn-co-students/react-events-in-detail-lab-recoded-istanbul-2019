// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
    timeoutHandler = event => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    };

    render() {
        return <button onClick={this.timeoutHandler}>dont click on me</button>;
    }
}

export default DelayedButton;