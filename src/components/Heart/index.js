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

function Heart() {
  const [features, setFeatures] = useState([]);
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
  return (
    <div className="py-4">
      <h3 className="mb-4">Please fill the details</h3>
      {/* // age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal */}
      <Form className="mb-5">
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
              id="fromFbs"
              featureName="FBS (fasting blood sugar) "
              func={changefbs}
            ></FormComponent>
            <FormComponent
              id="fromRestECG"
              featureName="RestECG"
              func={changeRestECG}
            ></FormComponent>
          </Col>
          <Col md={6} className="px-0">
            <FormComponent
              id="fromThalach"
              featureName="Thalach"
              func={changeThalach}
            ></FormComponent>
            <FormComponent
              id="fromExang"
              featureName="Exang (exercise induced angina)"
              func={changeExang}
            ></FormComponent>
            <FormComponent
              id="fromOldPeak"
              featureName="oldpeak (ST depression induced by exercise relative to rest)"
              func={changeOldpeak}
            ></FormComponent>
            <FormComponent
              id="fromSlope"
              featureName="Slope"
              func={changeSlope}
            ></FormComponent>
            <FormComponent
              id="fromCa"
              featureName="ca (number of major vessels (0-3) colored by flourosopy)"
              func={changeCa}
            ></FormComponent>
            <FormComponent
              id="fromTHal"
              featureName="Thal"
              func={changeThal}
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
