import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import FormComponent from "../Form/form";

function Cancer() {
  return (
    <div className="container">
      <h3 className="mb-4">Please fill the details</h3>
      <Form>
        <FormComponent id="fromRadiusMean" featureName="Radius Mean"></FormComponent>
        <FormComponent id="fromTextureMean" featureName="Texture Mean"></FormComponent>
        <FormComponent id="fromPerimeterMean" featureName="Perimeter Mean"></FormComponent>
        <FormComponent id="fromAreaMean" featureName="Area Mean"></FormComponent>
        <FormComponent id="fromSmoothnessMean" featureName="Smoothness Mean"></FormComponent>
        <FormComponent id="fromCompactnessMean" featureName="Compactness Mean"></FormComponent>
        <FormComponent id="fromConcavityMean" featureName="Concavity Mean"></FormComponent>
        <FormComponent id="fromConcanePointsMean" featureName="Concave Points Mean"></FormComponent>
        <FormComponent id="fromSymmetryMean" featureName="Symmetry Mean"></FormComponent>
        <FormComponent id="fromFractalDimensionMean" featureName="Fractal Dimension Mean"></FormComponent>
        <FormComponent id="fromRadiusSE" featureName="Radius SE"></FormComponent>
        <FormComponent id="fromTextureSE" featureName="Texture SE"></FormComponent>
        <FormComponent id="fromPerimeterSE" featureName="Perimeter SE"></FormComponent>
        <FormComponent id="fromAreaSE" featureName="Area SE"></FormComponent>
        <FormComponent id="fromSmoothnessSE" featureName="Smoothness SE"></FormComponent>
        <FormComponent id="fromCompactnessSE" featureName="Compactness SE"></FormComponent>
        <FormComponent id="fromConcavitySE" featureName="Concavity SE"></FormComponent>
        <FormComponent id="fromConcavePointsSE" featureName="Concave Points SE"></FormComponent>
        <FormComponent id="fromSymmetrySE" featureName="Symmetry SE"></FormComponent>
        <FormComponent id="fromFractalDimesionSE" featureName="Fractal Dimension SE"></FormComponent>
        <FormComponent id="fromRadiusWorst" featureName="Radius Worst"></FormComponent>
        <FormComponent id="fromTextureWorst" featureName="Texture Worst"></FormComponent>
        <FormComponent id="fromPerimeterWorst" featureName="Perimeter Worst"></FormComponent>
        <FormComponent id="fromAreaMeanWorst" featureName="Area Worst"></FormComponent>
        <FormComponent id="fromSmoothnessWorst" featureName="Smoothness Worst"></FormComponent>
        <FormComponent id="fromCompactnessWorst" featureName="Compactness Worst"></FormComponent>
        <FormComponent id="fromConcavityWorst" featureName="Concavity Worst"></FormComponent>
        <FormComponent id="fromConcanePointsWorst" featureName="Concave Points Worst"></FormComponent>
        <FormComponent id="fromSymmetryWorst" featureName="Symmetry Worst"></FormComponent>
        <FormComponent id="fromFractalDimensionWorst" featureName="Fractal Dimension Worst"></FormComponent>
      </Form>
    </div>
  );
}

export default Cancer;
