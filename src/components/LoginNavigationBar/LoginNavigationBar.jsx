import React, { PureComponent, useState } from "react";
import "../../style/App.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../../images/thinkery-logo.svg";

const LoginNavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="md"
      className="color-nav"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="navbrand" href="/">
          <img src={logo} width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LoginNavigationBar;
