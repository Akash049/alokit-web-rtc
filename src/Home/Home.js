import React from "react";
import "./Home.css";
import Icon from "react-icons-kit";
import { plusSquare } from "react-icons-kit/fa/plusSquare";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-headers"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="modal-head">Join or start a meeting</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="info-text">
          Enter the meeting code or Nickname. To start your own meeting, enter a
          nickname or leave a blank.
        </p>
        <input
          className="input-line"
          type="text"
          placeholder="Enter Meeting ID"
        />
        {/* <Button>Products</Button> */}
      </Modal.Body>
      <Modal.Footer>
        <p className="footer-text">Learn how to schedule a meeting.</p>
        <Button className="continue-button" href="/Video">
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
      <div className="dash-main">
        <div className="white-box">
          <div className="green-box">
            <p onClick={() => setModalShow(true)} className="join-text">
              <Icon icon={plusSquare} /> &nbsp;&nbsp;&nbsp;&nbsp;Join or start a
              meeting
            </p>
          </div>
          <div className="test-box">
            <p className="display-text">Nothing Scheduled</p>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Home;
