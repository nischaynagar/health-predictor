import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

function FormComponent(props) {
    return <div><Form.Group as={Row} className="mb-3" controlId={props.id}>
        <Form.Label column sm="2">
            {props.featureName}
        </Form.Label>
        <Col sm="10">
            <Form.Control placeholder="" />
        </Col>
    </Form.Group></div>;
}

export default FormComponent;
