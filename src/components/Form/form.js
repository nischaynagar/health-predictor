import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useState } from "react";

function FormComponent(props) {

    function handleChange(e) {
        console.log(e.target.value);
        props.func(e.target.value);
    }

    return <div><Form.Group as={Row} className="mb-3" controlId={props.id}>
        <Form.Label column sm="2">
            {props.featureName}
        </Form.Label>
        <Col sm="10">
            <Form.Control placeholder="" onChange={handleChange} />
        </Col>
    </Form.Group></div>;
}

export default FormComponent;
