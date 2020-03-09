import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  InputGroup,
  Nav,
  Container
} from "react-bootstrap";

export default function Login({ handleLogout }) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src="/logo.png" width="100px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Dashboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link disabled="true">Welcome Guest</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
