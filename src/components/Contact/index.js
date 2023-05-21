import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

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
      <div className="container">
        <h2>Contact Me</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="Name"
              aria-describedby="inputGroupPrepend"
              style={{ width: "300px", marginBottom: "10px" }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation style={{ width: "300px" }}>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
                className="form-control"
              />
              <Form.Control.Feedback type="invalid">
                Please enter an email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <div style={{ marginTop: "10px", marginBottom: "300px" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default Contact;
