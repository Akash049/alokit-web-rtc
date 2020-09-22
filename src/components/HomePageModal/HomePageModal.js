import React from 'react'
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import './HomePageModal.css'

function HomePageModal(props) {
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
      </Modal.Body>
      <Modal.Footer>
        <Button className="continue-button" href="/meetpage">
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
  
export default HomePageModal