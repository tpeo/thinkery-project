import React, { PureComponent } from "react";
import { Form, Input, Button } from "antd";
import "../../pages/Login/Login.css";

export default class EmployeeLoginForm extends PureComponent {
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

          <Form.Item className="SubmitFormButton">
            <Button
              className="LoginButton"
              type="primary"
              size="large"
              htmlType="submit"
              href="/home"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
