// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    clickHandle = (e) => {
        e.persist();
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay);
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandle}></button>
            </div>
        )
    }
}
