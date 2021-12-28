import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import "../TablePage.css";
import { useSelector } from "react-redux";

function Checkout() {
  const [itemInstanceID, setItemInstanceID] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [employee, setEmployee] = useState("");

  const employees = useSelector((state) => state.employees || {});

  return (
    <div>
      <h1 className="Header">Check-Out</h1>
      <Form name="basic" layout="vertical" initialValues={{ remember: true }}>
        <Form.Item label="Item Instance ID" name="itemInstanceID">
          <Input
            value={itemInstanceID}
            className="Form"
            placeholder="IT1234"
            onChange={(event) => setItemInstanceID(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Quantity" name="quantity">
          <Input
            value={quantity}
            className="Form"
            placeholder="48"
            onChange={(event) => setQuantity(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Start Date" name="startDate">
          <Input
            value={startDate}
            className="Form"
            placeholder="12/25/2021"
            onChange={(event) => setStartDate(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="End Date" name="endDate">
          <Input
            value={endDate}
            className="Form"
            placeholder="12/30/2021"
            onChange={(event) => setEndDate(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Employee" name="employee">
          <Select
            placeholder="EM1210 - Jonathan Wong (jonathanwong@yahoo.com)"
            onChange={setEmployee}
            style={{ textAlign: "left" }}
          >
            {Object.values(employees).map((emp, ind) => (
              <Select.Option key={`${ind}`} value={emp.employeeID}>
                {emp.employeeID} - {emp.firstName} {emp.lastName} ({emp.email})
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item className="SubmitFormButton">
          <Button
            className="LoginButton"
            type="primary"
            size="large"
            htmlType="submit"
            onClick={() => {}}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Checkout;
