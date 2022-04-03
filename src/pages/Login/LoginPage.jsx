import React from "react";

import AdminLoginForm from "../../components/AdminLoginForm/AdminLoginForm";
import EmployeeLoginForm from "../../components/EmployeeLoginForm/EmployeeLoginForm";
import LoginNavigationBar from "../../components/LoginNavigationBar/LoginNavigationBar";
import { Row, Col, Container } from "react-bootstrap";

import "./Login.css";

function LoginPage() {
  return (
    <div className="LoginPageLayout">
      <LoginNavigationBar />
      <div>
        <h1 className="Logo">thinkventory</h1>
      </div>
      <Row>
        <Col className="LoginForm">
          <p>Employee Sign In</p>
          <EmployeeLoginForm />
        </Col>
        <Col className="LoginForm">
          <p>Administrator Sign In</p>
          <AdminLoginForm />
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
