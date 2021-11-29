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

function navbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Health Predictor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/cancer">
                Cancer
              </Nav.Link>
              <Nav.Link as={Link} to="/diabetes">
                Diabetes
              </Nav.Link>
              <Nav.Link as={Link} to="/liver">
                Liver
              </Nav.Link>
              <Nav.Link as={Link} to="/heart">
                Heart
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/kidney">
                Kidney
              </Nav.Link> */}

              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
