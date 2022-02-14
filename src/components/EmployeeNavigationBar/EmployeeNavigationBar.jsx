import React, { PureComponent, useState } from "react";
import History from "../../navigation/History";
import "../../style/App.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../../images/thinkery-logo.svg";

// const EmployeeNavigationBar = () => {
function EmployeeNavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="md"
      className="color-nav"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="navbrand">
          <img src={logo} width="50" height="50" /> thinkventory
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="/reservations">Reservations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <text className="navBarText">Employee</text>
        <Nav className="me-auto" style={{ maxHeight: "100px" }} navbarScroll>
          <Nav.Link href="/orders">Mehul Daruka</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default EmployeeNavigationBar;
