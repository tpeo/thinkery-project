import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "./AdminLoginForm.css";
import { useHistory } from "react-router-dom";

export default function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

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
              history.push("/retrieve_credentials");
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
