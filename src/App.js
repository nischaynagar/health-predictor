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
import Home from "./components/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
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
