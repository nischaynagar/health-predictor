import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

function Cancer() {
  return (
    <div className="container">
      <h3 className="mb-4">Please fill the details</h3>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formRadiusMean">
          <Form.Label column sm="2">
            Radius_mean :
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="Radius_mean" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="fromTextureMean">
          <Form.Label column sm="2">
            Texture_mean :
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="Texture_mean" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="fromPerimeterMean">
          <Form.Label column sm="2">
            Perimeter_mean :
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="Perimeter_mean" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="fromAreaMean">
          <Form.Label column sm="2">
            Area_mean :
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="Area_mean" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="fromSmoothnessMean">
          <Form.Label column sm="2">
            Smoothness_mean :
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="Smoothness_mean" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="fromCompactnessMean">
          <Form.Label column sm="2">
            Compactness_mean :
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="Compactness_mean" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="fromConcavityMean">
          <Form.Label column sm="2">
            Concavity_mean :
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="Concavity_mean" />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Cancer;
