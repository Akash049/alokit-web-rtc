import React, { Component } from "react";
import Icon from "react-icons-kit";
import { mic } from "react-icons-kit/icomoon/mic";
import { videoCamera } from "react-icons-kit/fa/videoCamera";
import { phoneHangUp } from "react-icons-kit/icomoon/phoneHangUp";
import { ic_mic_off } from "react-icons-kit/md/";
import { ic_videocam_off } from "react-icons-kit/md/";
import { Link } from "react-router-dom";
import "./Video.css";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMicOn: false,
      isCamOn: false,
    };

    this.handleMicClick = this.handleMicClick.bind(this);
    this.handleCamClick = this.handleCamClick.bind(this);
  }

  handleMicClick() {
    this.setState((state) => ({
      isMicOn: !state.isMicOn,
    }));
  }

  handleCamClick() {
    this.setState((state) => ({
      isCamOn: !state.isCamOn,
    }));
  }

  render() {
    return (
      <div className="body-background-colour">
        &nbsp;
        <div class="footer">
          {this.state.isMicOn ? (
            <Icon
              icon={mic}
              onClick={this.handleMicClick}
              className="icons audio"
              size={25}
            />
          ) : (
            <Icon
              icon={ic_mic_off}
              onClick={this.handleMicClick}
              className="icons mic-off"
              size={25}
            />
          )}

          <Link to="/">
            <Icon icon={phoneHangUp} className="icons red-bg" size={25} />
          </Link>

          {this.state.isCamOn ? (
            <Icon
              icon={videoCamera}
              onClick={this.handleCamClick}
              className="icons video"
              size={25}
            />
          ) : (
            <Icon
              icon={ic_videocam_off}
              onClick={this.handleCamClick}
              className="icons cam-off"
              size={25}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Video;
