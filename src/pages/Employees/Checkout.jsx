import React, { useState, useRef } from "react";
import { Form, Input, Button, Select } from "antd";
import "../TablePage.css";
import { useSelector } from "react-redux";
import firebaseCalls from "../../utils/firebaseCalls";

function Checkout() {
  const [itemID, setItemID] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [instances, setInstances] = useState([]);
  const [program, setProgram] = useState("");
  const [employee, setEmployee] = useState("");
  const [description, setDescription] = useState("");
  const formRef = useRef();

  const employees = useSelector((state) => state.employees || {});
  const inventoryItems = useSelector((state) => state.inventory);

  const checkOutInstances = () => {
    const currentEmployee = JSON.parse(employee);
    instances.forEach((instanceID) => {
      firebaseCalls.addReservation(
        {
          reservationID: `RS${instanceID.substring(2)}-${startDate.replace(
            /\//g,
            ""
          )}`,
          itemInstanceID: instanceID,
          reservationStatus: 1,
          currentEmployee: currentEmployee.employeeID,
          employeeEmail: currentEmployee.email,
          program,
          reservationStartDate: startDate,
          reservationEndDate: endDate,
          description: description,
        },
        itemID
      );
    });
  };

  return (
    <div>
      <h1 className="Header">Check-Out</h1>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        ref={formRef}
      >
        <Form.Item label="Item ID" name="itemID">
          <Select
            placeholder="Select item ID"
            onChange={(val) => {
              setItemID(val);
              setInstances([]);
              formRef.current.setFieldsValue({ itemInstances: [] });
            }}
            bordered={false}
            style={{
              textAlign: "left",
              borderColor: "#b12f23",
              borderStyle: "solid",
              borderWidth: 1,
            }}
          >
            {Object.keys(inventoryItems || {}).map((itemID) => (
              <Select.Option key={itemID} value={itemID}>
                {itemID}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Item Instances" name="itemInstances">
          <Select
            placeholder="Select instance IDs"
            mode="multiple"
            onChange={setInstances}
            bordered={false}
            style={{
              textAlign: "left",
              borderColor: "#b12f23",
              borderStyle: "solid",
              borderWidth: 1,
            }}
          >
            {Object.keys(inventoryItems?.[itemID]?.instances ?? {})
              .filter(
                (instanceID) => !inventoryItems?.[itemID]?.instances[instanceID]
              )
              .map((instanceID) => (
                <Select.Option key={instanceID} value={instanceID}>
                  {instanceID}
                </Select.Option>
              ))}
          </Select>
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
        <Form.Item label="Program" name="program">
          <Input
            value={program}
            className="Form"
            placeholder="Program"
            onChange={(event) => setProgram(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Employee" name="employee">
          <Select
            placeholder="EM1210 - Jonathan Wong (jonathanwong@yahoo.com)"
            onChange={setEmployee}
            bordered={false}
            style={{
              textAlign: "left",
              borderColor: "#b12f23",
              borderStyle: "solid",
              borderWidth: 1,
            }}
          >
            {Object.values(employees).map((emp, ind) => (
              <Select.Option key={`${ind}`} value={JSON.stringify(emp)}>
                {emp.employeeID} - {emp.firstName} {emp.lastName} ({emp.email})
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input
            value={description}
            className="Form"
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Item>
        <Form.Item className="SubmitFormButton">
          <Button
            className="LoginButton"
            type="primary"
            size="large"
            htmlType="submit"
            disabled={!itemID || instances.length <= 0}
            onClick={checkOutInstances}
            href="/emp/reservations"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Checkout;
