import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Icon from "react-icons-kit";
import { ic_mic, ic_mic_off, ic_call, ic_videocam, ic_videocam_off} from 'react-icons-kit/md/'
import "./MeetPage.css";

class MeetPage extends Component {
  constructor(props){
    super(props)

    this.state = { 
      isMicOn: false,
      isCamOn: false 
    };

    this.handleMicClick = this.handleMicClick.bind(this);
    this.handleCamClick = this.handleCamClick.bind(this);
  }
  
  handleMicClick() {
    this.setState( state => ({
      isMicOn: !state.isMicOn
    }))
  }

  handleCamClick() {
    this.setState( state => ({
      isCamOn: !state.isCamOn
    }))
  }

  render() {
    return (
      <div className="background">
        <div className="footer">
          { this.state.isMicOn ?
            <Icon icon={ic_mic} onClick={this.handleMicClick} className="icons" size={25} /> :
            <Icon icon={ic_mic_off} onClick={this.handleMicClick} className="icons mic-off" size={25} />
          } 
          <Link to='/endmeet'>
            <Icon icon={ic_call} className="icons call" size={25} />
          </Link>
          { this.state.isCamOn ?
            <Icon icon={ic_videocam} onClick={this.handleCamClick}  className="icons" size={25} /> :
            <Icon icon={ic_videocam_off} onClick={this.handleCamClick}  className="icons cam-off" size={25} />
          }
        </div>
      </div>
    );
  }
}

export default MeetPage;
