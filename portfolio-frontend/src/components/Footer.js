import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect className="d-flex">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
};
export default Footer;
