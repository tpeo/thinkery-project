import React, { PureComponent, useState } from "react";
import History from "./History";
import "./../style/App.css";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from './../logo.svg';

// const EmployeeNavigationBar = () => {
function EmployeeNavigationBar() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="md" className="color-nav" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <img
            src={logo}
            width="50"
            height="50"
          />
          thinkventory
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <NavDropdown title="Reservations" id="basic-nav-dropdown">
              <NavDropdown.Item href="/reservations/checkout">Check Out</NavDropdown.Item>
              <NavDropdown.Item href="/reservations/checkin">Check In</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EmployeeNavigationBar;