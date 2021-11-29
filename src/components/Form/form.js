import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@mui/material";

function FormComponent(props) {
  function handleChange(e) {
    console.log(e.target.value);
    props.func(e.target.value);
  }

  return (
    <div>
      <TextField
        required
        label={props.featureName}
        id="outlined-start-adornment"
        onChange={handleChange}
        sx={{ m: 1, width: "40ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">{props.unit}</InputAdornment>,
        }}
      />
    </div>
  );
}

export default FormComponent;
