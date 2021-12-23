import React from "react";

import Logo from "./../../img/logo.png";
import AdminLoginForm from "../../components/Login/AdminLoginForm";
import EmployeeLoginForm from "../../components/Login/EmployeeLoginForm";
import LoginNavigationBar from "./../../navigation/LoginNavigationBar"
import { Row, Col, Container } from 'react-bootstrap';

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
          <p>
            Employee Sign In
          </p>
          <EmployeeLoginForm />
        </Col>
        <Col className="LoginForm">
          <p>
            Administrator Sign In
          </p>
          <AdminLoginForm />
        </Col>
      </Row>
      {/* <h3 className={"LabelReg"}>
        Don't have an account?&nbsp;
        <p
          className={"Link"}
          onClick={() => {
            History.push("/signup");
          }}
        >
          Sign up!
        </p>
      </h3>
      <h3
        className={"LabelReg"}
        style={{
          textDecoration: "underline",
          display: "inline-block",
        }}
        onClick={() => {
          History.push("/retrieve_credentials");
        }}
      >
        Forgot password?
      </h3> */}
    </div>
  );
}

export default LoginPage;
