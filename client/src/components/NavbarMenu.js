import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="dark">
          <Navbar.Brand href="#" className="text-white ms-3">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end me-3"
          >
            <Nav>
              <Nav.Link className="fw-bolder mt-1 text-white" disabled>
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
      </Navbar>
    </>
  );
};

export default NavbarMenu;
