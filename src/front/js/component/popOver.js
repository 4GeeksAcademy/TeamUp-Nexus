import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const PopOver = ({ placement, title, content }) => {
  return (
    
    <OverlayTrigger
      trigger="click"
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Header as="h3">{title}</Popover.Header>
          <Popover.Body>{content}</Popover.Body>
        </Popover>
      }
    >
      <Button variant="secondary" className="btn1 outline">Details</Button>
    </OverlayTrigger>
  );
};

export default PopOver;
