import React from "react";
import { Col, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import FormComponent from "../Form/form";
import { useState } from "react";

function Diabetes() {
  const [features, setFeatures] = useState([]);
  const [Pregnancies, setPregnancies] = useState(0);
  const [Glucose, setGlucose] = useState(0);
  const [BloodPressure, setBloodPressure] = useState(0);
  const [SkinThickness, setSkinThickness] = useState(0);
  const [Insulin, setInsulin] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [DiabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState(0);
  const [Age, setAge] = useState(0);

  function handleClick() {
    console.log(Pregnancies + " " + Insulin);
  }
  function changePregnancies(a) {
    setPregnancies(a);
  }
  function changeGlucose(a) {
    setGlucose(a);
  }
  function changeBloodPressure(a) {
    setBloodPressure(a);
  }
  function changeSkinThickness(a) {
    setSkinThickness(a);
  }
  function changeInsulin(a) {
    setInsulin(a);
  }
  function changeBMI(a) {
    setBMI(a);
  }
  function changeDiabetesPedigreeFunction(a) {
    setDiabetesPedigreeFunction(a);
  }
  function changeAge(a) {
    setAge(a);
  }
  return (
    <div className="py-4">
      <h3 className="mb-4">Please fill the details</h3>

      <Form className="mb-5">
        <Row>
          <Col md={6} className="px-0">
            <FormComponent
              id="fromPregnancies"
              featureName="Pregnancies"
              func={changePregnancies}
            ></FormComponent>
            <FormComponent
              id="fromGlucose"
              featureName="Glucose"
              func={changeGlucose}
            ></FormComponent>
            <FormComponent
              id="fromBloodPressure"
              featureName="Blood Pressure"
              func={changeBloodPressure}
            ></FormComponent>
            <FormComponent
              id="fromSkinThickness"
              featureName="Skin Thickness:"
              func={changeSkinThickness}
            ></FormComponent>
            <FormComponent
              id="fromInsulin"
              featureName="Insulin"
              func={changeInsulin}
            ></FormComponent>
            <FormComponent
              id="fromBMI"
              featureName="BMI"
              func={changeBMI}
            ></FormComponent>
            <FormComponent
              id="fromDiabetesPedigreeFunction"
              featureName="Diabetes Pedigree Function"
              func={changeDiabetesPedigreeFunction}
            ></FormComponent>
            <FormComponent
              id="fromAge"
              featureName="Age"
              func={changeAge}
            ></FormComponent>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleClick}>
          SUBMIT
        </Button>{" "}
      </Form>
    </div>
  );
}

export default Diabetes;
