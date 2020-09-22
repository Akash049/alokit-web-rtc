import React, { Component } from 'react';
import './Input.css';

class Input extends Component{

    constructor(props){
        super(props);
        this.state = {
            meetName : ""
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }
      
    handleInputChange(event){
        this.setState({
          meetName : event.target.value
        });
    }
      
    render() {
      const meetName = this.state.meetName;
      const msg = "Meet name is less than 5 chars."
      
        return(
          <div>
            <input placeholder='Enter meeting name' name='meetName' onChange={this.handleInputChange}/>           <br/>
            {meetName.length > 5 ? <p> {meetName} </p> : <p> {msg} </p>}
          </div>
        );
      }
    
}

export default Input;