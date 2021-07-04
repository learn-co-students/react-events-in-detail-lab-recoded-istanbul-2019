import React from 'react';

export default class DelayedButton extends React.Component {

    render() {
        const { onDelayedClick, delay } = this.props;
        const delayFunc = (e) => {
            e.persist();
            //const temp = e.type;
            setTimeout(() => onDelayedClick(e), delay);
        }
        return (
            <button onClick={delayFunc}></button>)
    }
}