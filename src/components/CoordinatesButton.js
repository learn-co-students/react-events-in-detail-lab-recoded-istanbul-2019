import React, { Component } from "react"

class CoordinatesButton extends Component {
    getCoordinates  = (e) =>{
        let coordinates = [e.clientX, e.clientY];
        this.props.onReceiveCoordinates(coordinates);
      }
      render(){
        return(
          <div>
            <button onClick={this.getCoordinates}/>
          </div>
        );
      }
  }

export default CoordinatesButton