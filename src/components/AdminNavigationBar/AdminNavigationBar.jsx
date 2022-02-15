import React, { PureComponent, useState } from "react";
import History from "../../navigation/History";
import "../../style/App.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../../images/thinkery-logo.svg";

const AdminNavigationBar = () => {
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
          <img alt="Thinkery Logo" src={logo} width="50" height="50" />
          {"  "}
          thinkventory
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="/admin/inventory">Inventory</Nav.Link>
            <Nav.Link href="/admin/orders">Orders</Nav.Link>
            <Nav.Link href="/admin/reservations">Reservations</Nav.Link>
            <Nav.Link href="/admin/employees">Employees</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <text className="navBarText">Administrator</text>
        <Nav className="me-auto" style={{ maxHeight: "100px" }} navbarScroll>
          <Nav.Link href="/admin/orders">Mehul Daruka</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminNavigationBar;
