import React, { Component } from 'react';
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props){
      super(props);
      this.state = {
          meetingID : this.props.meetingID
      }
  }

  handleText = (event) => {
        this.setState({
            meetingID : event.target.value
        })
  }

  startMeeting = () => {
      if(this.state.meetingID == ""){
          alert("Empty id not allowed")
      }else{
          alert("Your meeting id is :" + this.state.meetingID)
      }
  }

  render() {
    return (
      <div className="dash-main">
          <input onChange={(event)=>{this.handleText(event)}} className="input-box" type="text" placeholder="Enter Meeting ID"/>
          <div onClick={this.startMeeting} className="start-btn">Start</div>
      </div>
    )
  }
}
