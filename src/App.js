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
import car from "./img/background.jpg";

function App() {
  return (
    <div className="min-vh-100" style={{ backgroundImage: `url(${car})` }}>
      <div className="container mb-4 pt-5 font-08">
        <Switch>
          <Route exact path="/cancer" component={Cancer} />
          <Route exact path="/diabetes" component={Diabetes} />
          <Route exact path="/liver" component={Liver} />
          <Route exact path="/heart" component={Heart} />
          <Route exact path="/kidney" component={Kidney} />
          <Route exact path="/about" component={About} />
          <Route path="/" component={Home} />
          <Route
            render={function () {
              return <p>Not found</p>;
            }}
          />
        </Switch>
      </div>
      <div className="py-2 bg-black text-white  w-100 position-fixed bottom-0">
        <div className="container text-center font-07">@copyright 2021</div>
      </div>
    </div>
  );
}

export default App;
