import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="Name"
              defaultValue="First Last"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter an email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
      </Form>
    </section>
  );
}

export default Contact;
