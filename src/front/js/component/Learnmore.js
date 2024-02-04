// Learnmore.js

import React from 'react';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';

const Learnmore = ({ placement, title, content, onContactClick }) => {
  const popover = (
    <Popover id={`popover-positioned-${placement}`}>
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>
        
        {Object.entries(content).map(([key, value]) => (
          <p key={key}><strong>{key}:</strong> {value}</p>
        ))}
       
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement={placement} overlay={popover}>
      <Button variant="secondary" className="btn btn-info btn-rounded btn-sm">
        Learn More
      </Button>
    </OverlayTrigger>
  );
};

export default Learnmore;
