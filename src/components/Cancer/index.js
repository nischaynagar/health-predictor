import React, { useEffect } from "react";
import { Col, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import FormComponent from "../Form/form";
import { useState } from "react";
import { Alert, Slide, Snackbar } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ProgressComponent from "../ProgressBar";

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
  const [prob, setProb] = useState(0);

  const colorArray = ["#FF0000", "#63E13D"];
  const [color, setColor] = useState(colorArray[1]);
  const [isDaignose, setIsDaignose] = useState(0);

  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState(0);
  const [alertString, setAlertString] = useState(0);

  const [openDailog, setOpenDialog] = useState(false);
  const theme = useTheme();

  const handleClickOpenDailog = () => {
    setOpenDialog(true);
  };

  const handleCloseDailog = () => {
    setOpenDialog(false);
  };

  function handleClick() {
    fetch("/data", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        features: [
          radiusMean,
          textureMean,
          perimeterMean,
          areaMean,
          smoothnessMean,
          compactnessMean,
          concavityMean,
          concavePointsMean,
          symmetryMean,
          fractalDimensionMean,
          radiusSE,
          textureSE,
          perimeterSE,
          areaSE,
          smoothnessSE,
          compactnessSE,
          concavitySE,
          concavePointsSE,
          symmetrySE,
          fractalDimensionSE,
          radiusWorst,
          textureWorst,
          perimeterWorst,
          areaWorst,
          smoothnessWorst,
          compactnessWorst,
          concavityWorst,
          concavePointsWorst,
          symmetryWorst,
          fractalDimensionWorst,
        ],
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json["DIAG"], json["PROB_POS"]);
        if (json["DIAG"] === "B") {
          console.log(alertType);
          setIsDaignose(0);
          setProb((json["PROB_NEG"] * 100).toFixed(2));
          setAlertString("There's " + prob + " % chance that you're healthy!");
          setColor(colorArray[1]);
        } else if (json["DIAG"] === "M") {
          setIsDaignose(1);
          setProb((json["PROB_POS"] * 100).toFixed(2));
          setAlertString(
            "There's " + prob + " % chance that you've Heart disease :("
          );
          setColor(colorArray[0]);
        }
        setOpenDialog(true);
      });
  }

  useEffect(() => {
    if (isDaignose == 0) {
      setAlertString("There's " + prob + " % chance that you're healthy!");
    } else {
      setAlertString(
        "There's " + prob + " % chance that you've Heart disease :("
      );
    }
  }, [isDaignose, prob]);

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
    <div className="py-4">
      <h3 className="mb-4">Please fill the details</h3>
      <h5 className="mb-4">Here, fna : refers to the measurements computed from a digitized image of a fine needle aspirate (FNA) of a breast mass.</h5>
      <h5 className="mb-4">Here, Largest Measurements : can either be the maximum value or the mean of top 3-10 values.</h5>
      <Form className="mb-5">
        <Row>
          <Col md={4} className="px-0">
          <FormComponent
              id="fromRadiusMean"
              featureName="Mean Radius"
              func={changeRadiusMean}
              unit={"fna"}
            ></FormComponent>
            <FormComponent
              id="fromTextureMean"
              featureName="Mean Texture"
              func={changeTextureMean}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromPerimeterMean"
              featureName="Mean Perimeter"
              func={changePerimeterMean}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromAreaMean"
              featureName="Mean Area"
              func={changeAreaMean}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromSmoothnessMean"
              featureName="Mean Smoothness"
              func={changeSmoothnessMean}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromCompactnessMean"
              featureName="Mean Compactness"
              func={changeCompactnessMean}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromConcavityMean"
              featureName="Mean Concavity"
              func={changeConcavityMean}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromConcanePointsMean"
              featureName="Mean Concave Points"
              func={changeConcavePointsMean}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromSymmetryMean"
              featureName="Mean Symmetry"
              func={changeSymmetryMean}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromFractalDimensionMean"
              featureName="Mean Fractal Dimension"
              func={changeFractalDimensionMean}
              unit={"fna"}
              ></FormComponent>
        </Col>
          <Col md={4} className="px-0">
            
            <FormComponent
              id="fromRadiusSE"
              featureName="Standard Error in Radius"
              func={changeRadiusSE}
            ></FormComponent>
            <FormComponent
              id="fromTextureSE"
              featureName="Standard Error in Texture"
              func={changeTextureSE}
            ></FormComponent>
            <FormComponent
              id="fromPerimeterSE"
              featureName="Standard Error in Perimeter"
              func={changePerimeterSE}
            ></FormComponent>
            <FormComponent
              id="fromAreaSE"
              featureName="Standard Error in Area"
              func={changeAreaSE}
            ></FormComponent>
            <FormComponent
              id="fromSmoothnessSE"
              featureName="Standard Error in Smoothness"
              func={changeSmoothnessSE}
            ></FormComponent>
            <FormComponent
              id="fromCompactnessSE"
              featureName="Standard Error in Compactness"
              func={changeCompactnessSE}
            ></FormComponent>
            <FormComponent
              id="fromConcavitySE"
              featureName="Standard Error in Concavity"
              func={changeConcavitySE}
            ></FormComponent>
            <FormComponent
              id="fromConcavePointsSE"
              featureName="Standard Error in Concave Points"
              func={changeConcavePointsSE}
            ></FormComponent>
            <FormComponent
              id="fromSymmetrySE"
              featureName="Standard Error in Symmetry"
              func={changeSymmetrySE}
            ></FormComponent>
            <FormComponent
              id="fromFractalDimesionSE"
              featureName="Standard Error in Fractal Dimension"
              func={changeFractalDimensionSE}
            ></FormComponent>
          </Col>
          <Col md={4} className="px-0">
            
            <FormComponent
              id="fromRadiusWorst"
              featureName="Largest Radius"
              func={changeRadiusWorst}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromTextureWorst"
              featureName="Largest Texture"
              func={changeTextureWorst}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromPerimeterWorst"
              featureName="Largest Perimeter"
              func={changePerimeterWorst}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromAreaWorst"
              featureName="Largest Area"
              func={changeAreaWorst}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromSmoothnessWorst"
              featureName="Largest Smoothness"
              func={changeSmoothnessWorst}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromCompactnessWorst"
              featureName="Largest Compactness"
              func={changeCompactnessWorst}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromConcavityWorst"
              featureName="Largest Concavity"
              func={changeConcavityWorst}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromConcanePointsWorst"
              featureName="Largest Concave Points"
              func={changeConcavePointsWorst}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromSymmetryWorst"
              featureName="Largest Symmetry"
              func={changeSymmetryWorst}
              unit={"fna"}
              ></FormComponent>
            <FormComponent
              id="fromFractalDimensionWorst"
              featureName="Largest Fractal Dimension"
              func={changeFractalDimensionWorst}
              unit={"fna"}
              ></FormComponent>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleClick}>
          SUBMIT
        </Button>{" "}
      </Form>

      <Dialog
        open={openDailog}
        onClose={handleCloseDailog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <h4>{"Your Cancer Prediction"}</h4>
        </DialogTitle>
        <DialogContent>
          <ProgressComponent progressVal={prob} colorVal={color} />
          <DialogContentText>{alertString}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDailog}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Cancer;
