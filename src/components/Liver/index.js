import React from "react";
import { Col, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import FormComponent from "../Form/form";
import { useState } from "react";

function Liver() {
  const [features, setFeatures] = useState([]);
  const [Sex, setSex] = useState(0);
  const [Total_Bilirubin, setTotal_Bilirubin] = useState(0);
  const [Direct_Bilirubin, setDirect_Bilirubin] = useState(0);
  const [Alkaline_Phosphotase, setAlkaline_Phosphotase] = useState(0);
  const [Alamine_Aminotransferase, setAlamine_Aminotransferase] = useState(0);
  const [Aspartate_Aminotransferase, setAspartate_Aminotransferase] = useState(0);
  const [Age, setAge] = useState(0);
  const [Total_Protiens, setTotal_Protiens] = useState(0);
  const [Albumin, setAlbumin] = useState(0);
  const [Albumin_and_Globulin_Ratio, setAlbumin_and_Globulin_Ratio] = useState(0);
  
  function handleClick() {
    console.log(
      Sex + " " + Alamine_Aminotransferase 
    );
  }
  function changeSex(a) {
    setSex(a);
  }
  function changeTotal_Bilirubin(a) {
    setTotal_Bilirubin(a);
  }
  function changeDirect_Bilirubin(a) {
    setDirect_Bilirubin(a);
  }
  function changeAlkaline_Phosphotase(a) {
    setAlkaline_Phosphotase(a);
  }
  function changeAlamine_Aminotransferase(a) {
    setAlamine_Aminotransferase(a);
  }
  function changeAspartate_Aminotransferase(a) {
    setAspartate_Aminotransferase(a);
  }
  function changeAge(a) {
    setAge(a);
  }
  function changeTotal_Protiens(a) {
    setTotal_Protiens(a);
  }
  function changeAlbumin(a) {
    setAlbumin(a);
  }
  function changeAlbumin_and_Globulin_Ratio(a) {
    setAlbumin_and_Globulin_Ratio(a);
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
              id="fromTotal_Bilirubin"
              featureName="Total Bilirubin"
              func={changeTotal_Bilirubin}
            ></FormComponent>
            <FormComponent
              id="fromDirect_Bilirubin"
              featureName="Direct Bilirubin"
              func={changeDirect_Bilirubin}
            ></FormComponent>
            <FormComponent
              id="fromAlkaline_Phosphotase"
              featureName="Alkaline Phosphotase"
              func={changeAlkaline_Phosphotase}
            ></FormComponent>
            <FormComponent
              id="fromAlamine_Aminotransferase"
              featureName="Alamine Aminotransferase"
              func={changeAlamine_Aminotransferase}
            ></FormComponent>
            <FormComponent
              id="fromAspartate_Aminotransferase"
              featureName="Aspartate Aminotransferase"
              func={changeAspartate_Aminotransferase}
            ></FormComponent>
            <FormComponent
              id="fromTotal_Protiens"
              featureName="Total Protiens"
              func={changeTotal_Protiens}
            ></FormComponent>
            <FormComponent
              id="fromAlbumin"
              featureName="Albumin"
              func={changeAlbumin}
            ></FormComponent>
            <FormComponent
              id="fromAlbumin_and_Globulin_Ratio"
              featureName="Albumin and Globulin Ratio"
              func={changeAlbumin_and_Globulin_Ratio}
            ></FormComponent>
          </Col>
        </Row>
        <Button variant="warning" onClick={handleClick}>
          SUBMIT
        </Button>{" "}
      </Form>
    </div>
  );
}
export default Liver;
