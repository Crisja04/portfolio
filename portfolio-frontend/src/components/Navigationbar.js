import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg" collapseOnSelect className="d-flex">
      <Container>
        <Navbar.Brand href="#home">Cristian Tavarez</Navbar.Brand>
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigationbar;