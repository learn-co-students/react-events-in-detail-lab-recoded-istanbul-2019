// Code DelayedButton Component Here
import React, { Component } from 'react';
export default class DelayedButton extends Component {

    

    onClikHandel = event => {
        // let ev = event.target
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);

    }

    render() {
        return (
            <button onClick={this.onClikHandel}>delay btn</button>
        )
    }
}
