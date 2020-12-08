import React from "react";
import { Navbar, Nav, Form, Button, Badge, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Row style={{ width: "100%" }}>
        <Col>
          <Navbar.Brand href="#home">Health explore</Navbar.Brand>
        </Col>
        <Col>
          <Nav
            className="mr-auto"
            style={{
              justifyContent: "center",
            }}
          >
            <Nav.Link href="#">PROFILE</Nav.Link>
            <Nav.Link href="#">JOBS</Nav.Link>
            <Nav.Link href="#">PROFESSIONAL NETWORK</Nav.Link>
            <Nav.Link href="#">LOUNGE</Nav.Link>
            <Nav.Link href="#">SALARY</Nav.Link>
          </Nav>
        </Col>
        <Col>
          <Form
            inline
            style={{
              justifyContent: "flex-end",
            }}
          >
            <Button variant="outline-primary">CREATE JOB</Button>
            <Badge style={{ marginLeft: "20px" }} variant="primary">
              JO
            </Badge>
            <Nav.Link href="#">LOGOUT</Nav.Link>
          </Form>
        </Col>
      </Row>
    </Navbar>
  );
};

export default Header;
