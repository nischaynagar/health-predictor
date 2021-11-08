import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useState } from "react";

function FormComponent(props) {
  function handleChange(e) {
    console.log(e.target.value);
    props.func(e.target.value);
  }

  return (
    <div>
      <Form.Group as={Row} sm="6" className="mb-3" controlId={props.id}>
        <Col sm="6">
          <Form.Label column sm="12">
            {props.featureName}
          </Form.Label>
        </Col>
        <Form.Control onChange={handleChange} sm="4" className="mx-sm-0 mx-4" />
      </Form.Group>
    </div>
  );
}

export default FormComponent;
