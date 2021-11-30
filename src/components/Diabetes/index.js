import React, { useEffect } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import FormComponent from "../Form/form";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { Button, Slide, Snackbar } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ProgressComponent from "../ProgressBar";

function Diabetes() {
  const [Pregnancies, setPregnancies] = useState(0);
  const [Glucose, setGlucose] = useState(0);
  const [BloodPressure, setBloodPressure] = useState(0);
  const [SkinThickness, setSkinThickness] = useState(0);
  const [Insulin, setInsulin] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [DiabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState(0);
  const [Age, setAge] = useState(0);

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

  useEffect(() => {
    if (isDaignose == 0) {
      setAlertString("There's " + prob + " % chance that you're healthy!");
    } else {
      setAlertString("There's " + prob + " % chance that you've daibetes :(");
    }
  }, [isDaignose, prob]);

  function handleClick() {
    fetch("/data", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 3,
        features: [
          Pregnancies,
          Glucose,
          BloodPressure,
          SkinThickness,
          Insulin,
          BMI,
          DiabetesPedigreeFunction,
          Age,
        ],
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json["DIAG"], json["PROB_POS"]);
        if (json["DIAG"] === "0") {
          console.log(alertType);
          setIsDaignose(0);
          setProb((json["PROB_NEG"] * 100).toFixed(2));
          setAlertString("There's " + prob + " % chance that you're healthy!");
          setColor(colorArray[1]);
        } else if (json["DIAG"] === "1") {
          setIsDaignose(1);
          setProb((json["PROB_POS"] * 100).toFixed(2));
          setAlertString(
            "There's " + prob + " % chance that you've Diabetes :("
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
        "There's " + prob + " % chance that you've Diabetes :("
      );
    }
  }, [isDaignose, prob]);

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

  function uphand(feas) {
    console.log(feas.length)
    if (feas.length != 8) {
      alert("Report not recognized!")
      return
    }
    fetch("/data", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 3,
        features: feas,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json["DIAG"], json["PROB_POS"]);
        if (json["DIAG"] === "0") {
          console.log(alertType);
          setIsDaignose(0);
          setProb((json["PROB_NEG"] * 100).toFixed(2));
          setAlertString("There's " + prob + " % chance that you're healthy!");
          setColor(colorArray[1]);
        } else if (json["DIAG"] === "1") {
          setIsDaignose(1);
          setProb((json["PROB_POS"] * 100).toFixed(2));
          setAlertString(
            "There's " + prob + " % chance that you've daibetes :("
          );
          setColor(colorArray[0]);
        }
        setOpenDialog(true);
      });
  }

  async function showFile(e){
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      var feas = text.split(",")
      uphand(feas)
    };
    reader.readAsText(e.target.files[0])
  }


  return (
    <div className="py-4">
      <h3 className="mb-4">Please fill the details</h3>
      <label htmlFor="upload-photo">
        <input
          onChange={showFile}
    style={{ display: 'none' }}
    id="upload-photo"
    name="upload-photo"
    type="file"
  />

<Button variant="outlined"  color="secondary"
    component="span"
    aria-label="add">Upload
            </Button>
</label>
      <Form className="mb-5">
        <Row>
          <Col md={6} className="px-0">
            <FormComponent
              id="fromPregnancies"
              featureName="Number of pregnancies"
              func={changePregnancies}
            ></FormComponent>
            <FormComponent
              id="fromGlucose"
              featureName="Plasma Glucose Concentration"
              func={changeGlucose}
            ></FormComponent>
            <FormComponent
              id="fromBloodPressure"
              featureName="Blood Pressure"
              func={changeBloodPressure}
              unit="mmHg"
            ></FormComponent>
            <FormComponent
              id="fromSkinThickness"
              featureName="Skin Thickness:"
              func={changeSkinThickness}
              unit="mm"
            ></FormComponent>
          </Col>
          <Col md={6} className="px-0">
            <FormComponent
              id="fromInsulin"
              featureName="Insulin"
              func={changeInsulin}
              unit="mIU/L"
            ></FormComponent>
            <FormComponent
              id="fromBMI"
              featureName="Body Mass Index : BMI"
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
              unit="Years"
            ></FormComponent>
          </Col>
        </Row>
        <Button  variant="outlined"  color="secondary" onClick={handleClick}>
          SUBMIT
        </Button>{" "}
      </Form>

      <Dialog
        open={openDailog}
        onClose={handleCloseDailog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <h4>{"Your Diabetes Prediction"}</h4>
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

export default Diabetes;
