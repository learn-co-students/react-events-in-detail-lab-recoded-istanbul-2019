import React, { Component } from 'react'

export class DelayedButton extends Component {

    newFun = (e) => {
        e.persist();
        setTimeout(() => { this.props.onDelayedClick(e) }, this.props.delay)
    }
    render() {
        return (
            <div>
                <button onClick={this.newFun}>DelayedButton</button>
            </div >
        )
    }
}

export default DelayedButton