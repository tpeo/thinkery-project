import React from "react";

import Logo from "./../../img/logo.png";
import LoginForm from "../../components/Login/LoginForm";

import "./Login.css";

function LoginPage() {
  return (
    <div className="LoginPageLayout">
      <div className="Logo">
        <img src={Logo} alt="Thinkery Software Logo" width="60%"></img>
      </div>
      <LoginForm />
      <h3 className={"LabelReg"}>
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
        Forgot your password?
      </h3>
    </div>
  );
}

export default LoginPage;
