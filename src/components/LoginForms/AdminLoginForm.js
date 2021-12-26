import React, { PureComponent } from "react";
import History from "../../navigation/History";
import { Form, Input, Button } from "antd";
import "../../pages/Login/Login.css";

export default class AdminLoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <Form name="basic" layout="vertical" initialValues={{ remember: true }}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ message: "Please input your email!" }]}
          >
            <Input className="Form" placeholder="example@mail.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ message: "Please input your password!" }]}
          >
            <Input.Password className="Form" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <h3
              className="ForgotPassword"
              onClick={() => {
                History.push("/retrieve_credentials");
              }}
            >
              Forgot password?
            </h3>
          </Form.Item>
          <Form.Item className="SubmitFormButton">
            <Button
              className="LoginButton"
              type="primary"
              size="large"
              htmlType="submit"
              href="/orders"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
