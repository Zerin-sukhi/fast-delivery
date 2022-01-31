import React from "react";
import { Button, Form } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div style={{ width: "90%", bg: "warning" }} className="ms-5">
      <h2 className="ms-5">Please Contact with us.</h2>
      <Form className="p-3 m-2 bg-warning text-dark ms-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default ContactUs;
