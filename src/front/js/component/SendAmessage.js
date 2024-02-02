import React, { useState } from 'react';
import { Button, Form, Alert, Modal, Overlay, Popover } from 'react-bootstrap';

const Message = ({ show, handleClose }) => {
  const [messageBody, setMessageBody] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (e) => {
    setMessageBody(e.target.value);
  };

  const handleSaveChanges = () => {
    setTimeout(() => {
      setMessageSent(true);
      setMessageBody('');
    }, 1000);
  };

  const handleAlertClose = () => {
    setMessageSent(false);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Compose Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            as="textarea"
            placeholder="Enter your message here..."
            value={messageBody}
            onChange={handleInputChange}
            style={{ minHeight: '100px' }}
          />
          <div className="mt-2 d-flex justify-content-end">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveChanges}>
              Send Message
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Overlay
        target={document.activeElement}
        show={messageSent}
        placement="top"
      >
        {(props) => (
          <Popover id="popover-basic" {...props}>
            <Popover.Header as="h3">Success!</Popover.Header>
            <Popover.Body>Your message has been sent successfully!</Popover.Body>
          </Popover>
        )}
      </Overlay>

      <Alert variant="success" show={messageSent} onClose={handleAlertClose} dismissible>
        Your message has been sent successfully!
      </Alert>
    </>
  );
};

export default Message;
