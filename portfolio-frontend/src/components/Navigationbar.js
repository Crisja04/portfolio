import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar sticky="top" bg="primary" expand="lg" collapseOnSelect className="d-flex" id="main-navbar">
      <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigationbar;
