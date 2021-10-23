import React from "react";
import {
  Button,
  Input,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Container,
} from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Cancer from "./components/Cancer";
import Diabetes from "./components/Diabetes";
import Heart from "./components/Heart";
import Home from "./components/Home";
import Kidney from "./components/Kidney";
import Liver from "./components/Liver";
import Malaria from "./components/Malaria";
import Pneumonia from "./components/Pneumonia";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/cancer" component={Cancer} />
        <Route exact path="/diabetes" component={Diabetes} />
        <Route exact path="/liver" component={Liver} />
        <Route exact path="/heart" component={Heart} />
        <Route exact path="/kidney" component={Kidney} />
        <Route exact path="/malaria" component={Malaria} />
        <Route exact path="/pneumonia" component={Pneumonia} />
        <Route exact path="/about" component={About} />
        <Route path="/" component={Home} />
        <Route
          render={function () {
            return <p>Not found</p>;
          }}
        />
      </Switch>
    </>
  );
}

export default App;
