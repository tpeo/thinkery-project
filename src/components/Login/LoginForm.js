import React, { PureComponent } from "react";
import History from "../../navigation/History";
import {
  /* Login Form */
  Form,
  Input,
  Button,
} from "antd";

import AuthService from "../../services/AuthService";

import Logo from "./../../img/logo/logo.png";
import "../../pages/Login/style/Login.css";
import { resolveOnChange } from "antd/lib/input/Input";

export default class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onFinish = async (values, globalState) => {
    console.log("Received values of form: ", values);
    this.setState({
      email: values.email,
      password: values.password,
    });

    const _auth = new AuthService({
      email: this.state.email,
      password: this.state.password,
    });

    // login function for auth
    var response = await _auth.login();
    console.log(response);
    if (response.status == "Success") {
      console.log("Login Success!");
      console.log("Response", response);
      console.log("AWS", response.AWSresponse);
      globalState.updateUserInfo(response.AWSresponse.Item);
      //local storage stuff
      localStorage.setItem("isLoggedIn", true);
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      console.log("isLoggedIn", isLoggedIn);
      History.push("/dashboard");
    }

    // get all patients info
    const patientService = new PatientService();
    var patients = await patientService.getAllPatients();
    if (patients.status == "Success") {
      globalState.updatePatients(patients["AWSresponse"]["Items"]);
    }
    // localStorage.setItem("isLoggedIn", true);
    // const isLoggedIn = localStorage.getItem("isLoggedIn");
    // console.log("isLoggedIn", isLoggedIn);
    console.log(this.state.firstName);
  };

  render() {
    return (
      <GlobalContext.Consumer>
        {(globalState) => (
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={(values) => this.onFinish(values, globalState)}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ message: "Please input your email!" }]}
            >
              <Input placeholder="example@mail.com" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ message: "Please input your password!" }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item className="SubmitFormButton">
              <Button
                className="LoginButton"
                type="primary"
                size="large"
                htmlType="submit"
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        )}
      </GlobalContext.Consumer>
    );
  }
}
