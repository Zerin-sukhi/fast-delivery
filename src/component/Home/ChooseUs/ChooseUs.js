import React from "react";
import { Accordion } from "react-bootstrap";

const ChooseUs = () => {
  return (
    <div style={{ width: "90%", bg: "warning" }} className="ms-5">
      <h2 className="ms-5">Why You Choose Us</h2>
      <Accordion defaultActiveKey="0" className="ms-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Our Speed</Accordion.Header>
          <Accordion.Body>
            Why use a Courier Service if the item won’t arrive quickly? Our
            streamlined network ensures the fastest possible movement of
            documents and packages.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Reliability</Accordion.Header>
          <Accordion.Body>
            The SCS system of security checks and emergency back-ups is
            absolutely complete. Thanks to computerized administration and a
            staff that is second to none.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Low Cost</Accordion.Header>
          <Accordion.Body>
            All rates are quite reasonable, even for heavy/lightweight items,
            fragile items, articles or bulky printed materials.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ChooseUs;
