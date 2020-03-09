import React from "react";
import { Jumbotron, Col, Row, Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Details from "./Details";
import Data from "./data.js";

export default function Login({ handleLogout }) {
  return (
    <>
      <Navbar handleLogout={handleLogout} />
      <Container>
        <Row>
          <Col md="12">
            <Data />
          </Col>
        </Row>
      </Container>
    </>
  );
}
