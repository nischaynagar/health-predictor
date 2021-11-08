import React from "react";
import { Col, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import FormComponent from "../Form/form";
import { useState } from "react";

function Cancer() {
  const [features, setFeatures] = useState([]);
  const [radiusMean, setRadiusMean] = useState(0);
  const [textureMean, setTextureMean] = useState(0);
  const [perimeterMean, setPerimeterMean] = useState(0);
  const [areaMean, setAreaMean] = useState(0);
  const [smoothnessMean, setSmoothnessMean] = useState(0);
  const [compactnessMean, setCompactnessMean] = useState(0);
  const [concavityMean, setConcavityMean] = useState(0);
  const [concavePointsMean, setConcavePointsMean] = useState(0);
  const [symmetryMean, setSymmetryMean] = useState(0);
  const [fractalDimensionMean, setFractalDimensionMean] = useState(0);
  const [radiusSE, setRadiusSE] = useState(0);
  const [textureSE, setTextureSE] = useState(0);
  const [perimeterSE, setPerimeterSE] = useState(0);
  const [areaSE, setAreaSE] = useState(0);
  const [smoothnessSE, setSmoothnessSE] = useState(0);
  const [compactnessSE, setCompactnessSE] = useState(0);
  const [concavitySE, setConcavitySE] = useState(0);
  const [concavePointsSE, setConcavePointsSE] = useState(0);
  const [symmetrySE, setSymmetrySE] = useState(0);
  const [fractalDimensionSE, setFractalDimensionSE] = useState(0);
  const [radiusWorst, setRadiusWorst] = useState(0);
  const [textureWorst, setTextureWorst] = useState(0);
  const [perimeterWorst, setPerimeterWorst] = useState(0);
  const [areaWorst, setAreaWorst] = useState(0);
  const [smoothnessWorst, setSmoothnessWorst] = useState(0);
  const [compactnessWorst, setCompactnessWorst] = useState(0);
  const [concavityWorst, setConcavityWorst] = useState(0);
  const [concavePointsWorst, setConcavePointsWorst] = useState(0);
  const [symmetryWorst, setSymmetryWorst] = useState(0);
  const [fractalDimensionWorst, setFractalDimensionWorst] = useState(0);

  function handleClick() {
    console.log(
      radiusMean + " " + smoothnessMean + " " + fractalDimensionWorst
    );
  }
  function changeRadiusMean(a) {
    setRadiusMean(a);
  }
  function changeTextureMean(a) {
    setTextureMean(a);
  }
  function changePerimeterMean(a) {
    setPerimeterMean(a);
  }
  function changeAreaMean(a) {
    setAreaMean(a);
  }
  function changeSmoothnessMean(a) {
    setSmoothnessMean(a);
  }
  function changeCompactnessMean(a) {
    setCompactnessMean(a);
  }
  function changeConcavityMean(a) {
    setConcavityMean(a);
  }
  function changeConcavePointsMean(a) {
    setConcavePointsMean(a);
  }
  function changeSymmetryMean(a) {
    setSymmetryMean(a);
  }
  function changeFractalDimensionMean(a) {
    setFractalDimensionMean(a);
  }
  function changeRadiusSE(a) {
    setRadiusSE(a);
  }
  function changeTextureSE(a) {
    setTextureSE(a);
  }
  function changePerimeterSE(a) {
    setPerimeterSE(a);
  }
  function changeAreaSE(a) {
    setAreaSE(a);
  }
  function changeSmoothnessSE(a) {
    setSmoothnessSE(a);
  }
  function changeCompactnessSE(a) {
    setCompactnessSE(a);
  }
  function changeConcavitySE(a) {
    setConcavitySE(a);
  }
  function changeConcavePointsSE(a) {
    setConcavePointsSE(a);
  }
  function changeSymmetrySE(a) {
    setSymmetrySE(a);
  }
  function changeFractalDimensionSE(a) {
    setFractalDimensionSE(a);
  }
  function changeRadiusWorst(a) {
    setRadiusWorst(a);
  }
  function changeTextureWorst(a) {
    setTextureWorst(a);
  }
  function changePerimeterWorst(a) {
    setPerimeterWorst(a);
  }
  function changeAreaWorst(a) {
    setAreaWorst(a);
  }
  function changeSmoothnessWorst(a) {
    setSmoothnessWorst(a);
  }
  function changeCompactnessWorst(a) {
    setCompactnessWorst(a);
  }
  function changeConcavityWorst(a) {
    setConcavityWorst(a);
  }
  function changeConcavePointsWorst(a) {
    setConcavePointsWorst(a);
  }
  function changeSymmetryWorst(a) {
    setSymmetryWorst(a);
  }
  function changeFractalDimensionWorst(a) {
    setFractalDimensionWorst(a);
  }

  return (
    <>
      <h3 className="mb-4">Please fill the details</h3>

      <Form className="mb-5">
        <Row>
          <Col md={6} className="px-0">
            <FormComponent
              id="fromRadiusMean"
              featureName="Radius Mean"
              func={changeRadiusMean}
            ></FormComponent>
            <FormComponent
              id="fromTextureMean"
              featureName="Texture Mean"
              func={changeTextureMean}
            ></FormComponent>
            <FormComponent
              id="fromPerimeterMean"
              featureName="Perimeter Mean"
              func={changePerimeterMean}
            ></FormComponent>
            <FormComponent
              id="fromAreaMean"
              featureName="Area Mean"
              func={changeAreaMean}
            ></FormComponent>
            <FormComponent
              id="fromSmoothnessMean"
              featureName="Smoothness Mean"
              func={changeSmoothnessMean}
            ></FormComponent>
            <FormComponent
              id="fromCompactnessMean"
              featureName="Compactness Mean"
              func={changeCompactnessMean}
            ></FormComponent>
            <FormComponent
              id="fromConcavityMean"
              featureName="Concavity Mean"
              func={changeConcavityMean}
            ></FormComponent>
            <FormComponent
              id="fromConcanePointsMean"
              featureName="Concave Points Mean"
              func={changeConcavePointsMean}
            ></FormComponent>
            <FormComponent
              id="fromSymmetryMean"
              featureName="Symmetry Mean"
              func={changeSymmetryMean}
            ></FormComponent>
            <FormComponent
              id="fromFractalDimensionMean"
              featureName="Fractal Dimension Mean"
              func={changeFractalDimensionMean}
            ></FormComponent>
            <FormComponent
              id="fromRadiusSE"
              featureName="Radius SE"
              func={changeRadiusSE}
            ></FormComponent>
            <FormComponent
              id="fromTextureSE"
              featureName="Texture SE"
              func={changeTextureSE}
            ></FormComponent>
            <FormComponent
              id="fromPerimeterSE"
              featureName="Perimeter SE"
              func={changePerimeterSE}
            ></FormComponent>
            <FormComponent
              id="fromAreaSE"
              featureName="Area SE"
              func={changeAreaSE}
            ></FormComponent>
            <FormComponent
              id="fromSmoothnessSE"
              featureName="Smoothness SE"
              func={changeSmoothnessSE}
            ></FormComponent>
          </Col>
          <Col md={6} className="px-0">
            <FormComponent
              id="fromCompactnessSE"
              featureName="Compactness SE"
              func={changeCompactnessSE}
            ></FormComponent>
            <FormComponent
              id="fromConcavitySE"
              featureName="Concavity SE"
              func={changeConcavitySE}
            ></FormComponent>
            <FormComponent
              id="fromConcavePointsSE"
              featureName="Concave Points SE"
              func={changeConcavePointsSE}
            ></FormComponent>
            <FormComponent
              id="fromSymmetrySE"
              featureName="Symmetry SE"
              func={changeSymmetrySE}
            ></FormComponent>
            <FormComponent
              id="fromFractalDimesionSE"
              featureName="Fractal Dimension SE"
              func={changeFractalDimensionSE}
            ></FormComponent>
            <FormComponent
              id="fromRadiusWorst"
              featureName="Radius Worst"
              func={changeRadiusWorst}
            ></FormComponent>
            <FormComponent
              id="fromTextureWorst"
              featureName="Texture Worst"
              func={changeTextureWorst}
            ></FormComponent>
            <FormComponent
              id="fromPerimeterWorst"
              featureName="Perimeter Worst"
              func={changePerimeterWorst}
            ></FormComponent>
            <FormComponent
              id="fromAreaWorst"
              featureName="Area Worst"
              func={changeAreaWorst}
            ></FormComponent>
            <FormComponent
              id="fromSmoothnessWorst"
              featureName="Smoothness Worst"
              func={changeSmoothnessWorst}
            ></FormComponent>
            <FormComponent
              id="fromCompactnessWorst"
              featureName="Compactness Worst"
              func={changeCompactnessWorst}
            ></FormComponent>
            <FormComponent
              id="fromConcavityWorst"
              featureName="Concavity Worst"
              func={changeConcavityWorst}
            ></FormComponent>
            <FormComponent
              id="fromConcanePointsWorst"
              featureName="Concave Points Worst"
              func={changeConcavePointsWorst}
            ></FormComponent>
            <FormComponent
              id="fromSymmetryWorst"
              featureName="Symmetry Worst"
              func={changeSymmetryWorst}
            ></FormComponent>
            <FormComponent
              id="fromFractalDimensionWorst"
              featureName="Fractal Dimension Worst"
              func={changeFractalDimensionWorst}
            ></FormComponent>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleClick}>
          SUBMIT
        </Button>{" "}
      </Form>
    </>
  );
}

export default Cancer;
