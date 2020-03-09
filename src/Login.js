import React from "react";
import { Jumbotron, Row, Col, Button, Card } from "react-bootstrap";

export default function Login({ handleLogin, msg }) {
  return (
    <>
      <Jumbotron>
        <Col md="12">
          <img
            src="/logo.png"
            className="img-responsive"
            alt="logo-smile"
            width="200px"
          />
        </Col>
      </Jumbotron>

      <Col md="12">
        <Row>
          <Col md="4" />
          <Col md="4">
            <Card>
              <Card.Body>
                <Card.Title>{msg} </Card.Title>
                <Button onClick={handleLogin} variant="outline-primary">
                  Login as Guest
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" />
        </Row>
      </Col>
    </>
  );
}
