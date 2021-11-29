import React from "react";
import { Col, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import FormComponent from "../Form/form";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ProgressComponent from "../ProgressBar";

function Kidney() {
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

  const [features, setFeatures] = useState([]);
  const [Age, setAge] = useState(0);
  const [BP, setBP] = useState(0);
  const [AL, setAL] = useState(0);
  const [PCC, setPCC] = useState(0);
  const [BGR, setBGR] = useState(0);
  const [BU, setBU] = useState(0);
  const [SC, setSC] = useState(0);
  const [HEMO, setHEMO] = useState(0);
  const [PCV, setPCV] = useState(0);
  const [HTN, setHTN] = useState(0);
  const [DM, setDM] = useState(0);
  const [Appet, setAppet] = useState(0);

  function handleClick() {}
  function changeAge(a) {
    setAge(a);
  }
  function changeBP(a) {
    setBP(a);
  }
  function changeAL(a) {
    setAL(a);
  }
  function changePCC(a) {
    setPCC(a);
  }
  function changeBGR(a) {
    setBGR(a);
  }
  function changeBU(a) {
    setBU(a);
  }
  function changeSC(a) {
    setSC(a);
  }
  function changeHEMO(a) {
    setHEMO(a);
  }
  function changePCV(a) {
    setPCV(a);
  }
  function changeHTN(a) {
    setHTN(a);
  }
  function changeDM(a) {
    setDM(a);
  }
  function changeAppet(a) {
    setAppet(a);
  }
  return (
    <div className="py-4">
      <h3 className="mb-4">Please fill the details</h3>

      <Form className="mb-5">
        <Row>
          <Col md={6} className="px-0">
            <FormComponent
              id="fromAge"
              featureName="Age"
              func={changeAge}
            ></FormComponent>
            <FormComponent
              id="fromBP"
              featureName="BP"
              func={changeBP}
            ></FormComponent>
            <FormComponent
              id="fromAL"
              featureName="AL"
              func={changeAL}
            ></FormComponent>
            <FormComponent
              id="fromPCC"
              featureName="PCC"
              func={changePCC}
            ></FormComponent>
            <FormComponent
              id="fromBGR"
              featureName="BGR"
              func={changeBGR}
            ></FormComponent>
            <FormComponent
              id="fromBU"
              featureName="BU"
              func={changeBU}
            ></FormComponent>
          </Col>
          <Col md={6} className="px-0">
            <FormComponent
              id="fromSC"
              featureName="SC"
              func={changeSC}
            ></FormComponent>
            <FormComponent
              id="fromHEMO"
              featureName="HEMO"
              func={changeHEMO}
            ></FormComponent>
            <FormComponent
              id="fromPCV"
              featureName="PCV"
              func={changePCV}
            ></FormComponent>
            <FormComponent
              id="fromHTN"
              featureName="HTN"
              func={changeHTN}
            ></FormComponent>
            <FormComponent
              id="fromDM"
              featureName="DM"
              func={changeDM}
            ></FormComponent>
            <FormComponent
              id="fromAppet"
              featureName="Appet"
              func={changeAppet}
            ></FormComponent>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleClickOpenDailog}>
          SUBMIT
        </Button>{" "}
      </Form>

      <Dialog
        open={openDailog}
        onClose={handleCloseDailog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <h4>{"Your Kidney Disease Prediction"}</h4>
        </DialogTitle>
        <DialogContent>
          <ProgressComponent />
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
export default Kidney;
