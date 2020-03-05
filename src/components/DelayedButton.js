// Code DelayedButton Component Here
import React , {Component} from 'react'
class DelayedButton extends Component{
    constructor(){
        super()
    }
    handleClickDelay =(event) =>{       
        event.persist()
		setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }
    render(){
        return(
            <button onClick={this.handleClickDelay}> btn1 </button>
        )
    }
}
export default DelayedButton