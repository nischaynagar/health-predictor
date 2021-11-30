import React, { useEffect } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import FormComponent from "../Form/form";
import { useState } from "react";
import { Alert, Slide, Snackbar, Button, Fab } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ProgressComponent from "../ProgressBar";
import UploadIcon from '@mui/icons-material/Upload';


function Heart() {
  const [features1, setFeatures] = useState([]);
  const [Age, setAge] = useState(0);
  const [Sex, setSex] = useState(0);
  const [Chestpaintype, setChestpaintype] = useState(0);
  const [Trestbps, setTrestbps] = useState(0);
  const [SerumCholestoral, setSerumCholestoral] = useState(0);
  const [fbs, setfbs] = useState(0);
  const [RestECG, setRestECG] = useState(0);
  const [Thalach, setThalach] = useState(0);
  const [exang, setExang] = useState(0);
  const [oldpeak, setOldpeak] = useState(0);
  const [Slope, setSlope] = useState(0);
  const [ca, setCa] = useState(0);
  const [Thal, setThal] = useState(0);
  const [prob, setProb] = useState(0);

  const colorArray = ["#FF0000", "#63E13D"];
  const [color, setColor] = useState(colorArray[1]);
  const [isDaignose, setIsDaignose] = useState(0);

  const [openDailog, setOpenDialog] = useState(false);
  const theme = useTheme();

  const handleClickOpenDailog = () => {
    setOpenDialog(true);
  };

  const handleCloseDailog = () => {
    setOpenDialog(false);
  };

  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState(0);
  const [alertString, setAlertString] = useState(0);

  function handleClick() {

    fetch("/data", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 2,
        features: [
          Age,
          Sex,
          Chestpaintype,
          Trestbps,
          SerumCholestoral,
          fbs,
          RestECG,
          Thalach,
          exang,
          oldpeak,
          Slope,
          ca,
          Thal,
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
            "There's " + prob + " % chance that you've Heart disease :("
          );
          setColor(colorArray[0]);
        }
        setOpenDialog(true);
      });
  }

  function handleUp(feas) {
    console.log(feas.length)
    if (feas.length != 13) {
      alert("Report not recognized!")
      return
    }
    console.log(feas)
    fetch("/data", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 2,
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

  function changeAge(a) {
    setAge(a);
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
  function changefbs(a) {
    setfbs(a);
  }
  function changeRestECG(a) {
    setRestECG(a);
  }
  function changeThalach(a) {
    setThalach(a);
  }
  function changeExang(a) {
    setExang(a);
  }
  function changeOldpeak(a) {
    setOldpeak(a);
  }
  function changeSlope(a) {
    setSlope(a);
  }
  function changeCa(a) {
    setCa(a);
  }
  function changeThal(a) {
    setThal(a);
  }

  function uphand(feas) {
    handleUp(feas)
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
      <h5 className="mb-4">New users should refer to the information given at the bottom of the page before submitting data.</h5>
      {/* // age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal */}
      
      

      
      <label htmlFor="upload-photo">
        <input
          onChange={showFile}
    style={{ display: 'none' }}
    id="upload-photo"
    name="upload-photo"
    type="file"
  />

<Button variant="contained" color="primary" startIcon={<UploadIcon />}
    component="span"
    aria-label="add">Upload
            </Button>
</label>
      

      <Form className="mb-5">
        <Row>
          <Col md={6} className="px-0">
            <FormComponent
              id="fromAge"
              featureName="Age"
              func={changeAge}
              unit="Years"
            ></FormComponent>
            <FormComponent
              id="fromSex"
              featureName="Sex"
              func={changeSex}
              unit="Female:0 , Male:1"
            ></FormComponent>
            <FormComponent
              id="fromChestpaintype"
              featureName="Chest pain type"
              func={changeChestpaintype}
              unit="1#"
            ></FormComponent>
            <FormComponent
              id="fromTrestbps"
              featureName="Resting Blood Pressure"
              func={changeTrestbps}
              unit="mmHg"
            ></FormComponent>
            <FormComponent
              id="fromSerumCholestoral"
              featureName="Serum Cholestrol"
              func={changeSerumCholestoral}
              unit="mg/dl"
            ></FormComponent>
            <FormComponent
              id="fromFbs"
              featureName="Fasting blood sugar"
              func={changefbs}
              unit="2#"
              ></FormComponent>
            <FormComponent
              id="fromRestECG"
              featureName="RestECG"
              func={changeRestECG}
              unit="3#"
              ></FormComponent>
          </Col>
          <Col md={6} className="px-0">
            <FormComponent
              id="fromThalach"
              featureName="Maximum heart rate when exercising"
              func={changeThalach}
            ></FormComponent>
            <FormComponent
              id="fromExang"
              featureName="Exercise induced angina"
              func={changeExang}
              unit="Yes:1 , No:0"
              ></FormComponent>
            <FormComponent
              id="fromOldPeak"
              featureName="ST depression induced by exercise relative to rest"
              func={changeOldpeak}
            ></FormComponent>
            <FormComponent
              id="fromSlope"
              featureName="Slope of the peak exercise ST segment"
              func={changeSlope}
              unit="4#"
              ></FormComponent>
            <FormComponent
              id="fromCa"
              featureName="Number of major vessels colored by flourosopy"
              func={changeCa}
              unit="Between 0-3"
            ></FormComponent>
            <FormComponent
              id="fromTHal"
              featureName="Thalassemia"
              func={changeThal}
              unit="5#"
            ></FormComponent>
          </Col>
        </Row>
        <Button variant="contained" color="primary" onClick={handleClick}>
          SUBMIT
        </Button>{" "}
      </Form>

      <h5 className="mb-4">1#</h5>
          <h6 className="mb-4">1: Typical angina</h6>
          <h6 className="mb-4">2: Atypical angina</h6>
          <h6 className="mb-4">3: Non-anginal pain</h6>
          <h6 className="mb-4">4: Asymptomatic</h6>
      <br/>
          <h5 className="mb-4">2#  (Fasting blood sugar {">"} 120 mg/dl)</h5>
          <h6 className="mb-4">(0: False, 1: True)</h6>
      <br/>
          <h5 className="mb-4">3#</h5>
          <h6 className="mb-4">0: Normal</h6>
          <h6 className="mb-4">1: Having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of {">"} 0.05 mV)</h6>
          <h6 className="mb-4">2: Showing probable or definite left ventricular hypertrophy by Estes' criteria</h6>
      <br/>
      <h5 className="mb-4">4#</h5>
          <h6 className="mb-4">1: Upsloping</h6>
          <h6 className="mb-4">2: Flat</h6>
      <h6 className="mb-4">3: Downsloping</h6>
      <br/>
      <h5 className="mb-4">5#</h5>
          <h6 className="mb-4">3: Normal</h6>
          <h6 className="mb-4">6: Fixed defect</h6>
          <h6 className="mb-4">7: Reversable defect</h6>
      <Dialog
        open={openDailog}
        onClose={handleCloseDailog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <h4>{"Your Heart Disease Prediction"}</h4>
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

export default Heart;
