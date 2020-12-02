import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar sticky="top" bg="white" variant="light" expand="lg" collapseOnSelect className="d-flex shadow-sm">
      <Container>
        <Navbar.Brand href="/">Cristian Tavarez</Navbar.Brand>
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigationbar;
