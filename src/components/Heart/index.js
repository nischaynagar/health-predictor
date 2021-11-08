import React from "react";
import { Col, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import FormComponent from "../Form/form";
import { useState } from "react";

function Heart() {
  const [features, setFeatures] = useState([]);
  const [Sex, setSex] = useState(0);
  const [Chestpaintype, setChestpaintype] = useState(0);
  const [Trestbps, setTrestbps] = useState(0);
  const [SerumCholestoral, setSerumCholestoral] = useState(0);
  const [RestECG, setRestECG] = useState(0);
  const [Thalach, setThalach] = useState(0);
  const [Age, setAge] = useState(0);
  const [Slope, setSlope] = useState(0);
  const [Thal, setThal] = useState(0);
  
  function handleClick() {
    console.log(
      Sex + " " + RestECG 
    );
  }
  function changeSex(a) {
    setSex(a);
  }
  function changeChestpaintype(a) {
    setChestpaintype(a);
  }
  function changeTrestbps(a) {
    setTrestbps(a);
  }
  function changeSerumCholestoral(a) {
    setSerumCholestoral(a);
  }
  function changeRestECG(a) {
    setRestECG(a);
  }
  function changeThalach(a) {
    setThalach(a);
  }
  function changeAge(a) {
    setAge(a);
  }
  function changeSlope(a) {
    setSlope(a);
  }
  function changeThal(a) {
    setThal(a);
  }
  return (
    <div className="container">
      <h3 className="mb-4">Please fill the details</h3>

      <Form>
        <Row>
          <Col md={6} className="px-0">
            <FormComponent
              id="fromAge"
              featureName="Age"
              func={changeAge}
            ></FormComponent>
            <FormComponent
              id="fromSex"
              featureName="Sex"
              func={changeSex}
            ></FormComponent>
            <FormComponent
              id="fromChestpaintype"
              featureName="Chest pain type"
              func={changeChestpaintype}
            ></FormComponent>
            <FormComponent
              id="fromTrestbps"
              featureName="Trest BPS"
              func={changeTrestbps}
            ></FormComponent>
            <FormComponent
              id="fromSerumCholestoral"
              featureName="Serum Cholestrol (in mg/dl) "
              func={changeSerumCholestoral}
            ></FormComponent>
            <FormComponent
              id="fromRestECG"
              featureName="RestECG"
              func={changeRestECG}
            ></FormComponent>
            <FormComponent
              id="fromThalach"
              featureName="Thalach"
              func={changeThalach}
            ></FormComponent>
            <FormComponent
              id="fromSlope"
              featureName="Slope"
              func={changeSlope}
            ></FormComponent>
            <FormComponent
              id="fromTHal"
              featureName="Thal"
              func={changeThal}
            ></FormComponent>
          </Col>
        </Row>
        <Button variant="warning" onClick={handleClick}>
          SUThalachT
        </Button>{" "}
      </Form>
    </div>
  );
}

export default Heart;
