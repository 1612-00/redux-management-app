import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link className="fw-bolder mt-1" disabled>
                Username
              </Nav.Link>
              <Button
                variant="secondary"
                className="fw-bolder text-white me-2"
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
