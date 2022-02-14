import React, { useState } from "react";
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable";
import { Form, Input, Button } from "antd";
import "../TablePage.css";
import NewItemModalWrapper from "../../components/NewItemModalWrapper/NewItemModalWrapper";
import firebaseCalls from "../../firebase/firebaseCalls";

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Employees() {
  const [newEmployeeModal, setNewEmployeeModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const submitNewEmployee = () => {
    setNewEmployeeModal(false);

    const employeeID = getRandomNumberBetween(1000, 9999);
    firebaseCalls.addEmployee({
      firstName,
      lastName,
      email,
      employeeID: "EM" + String(employeeID),
    });

    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div>
      <div className="fullHeader">
        <h1 className="Header">Employees</h1>
        <Button
          className="addButton"
          type="primary"
          size="large"
          htmlType="submit"
          onClick={() => setNewEmployeeModal(true)}
        >
          New Employee
        </Button>
      </div>
      <EmployeesTable />
      <NewItemModalWrapper
        title="New Employee"
        showModal={newEmployeeModal}
        onHide={() => setNewEmployeeModal(false)}
        onSubmit={submitNewEmployee}
        submitText="Add Employee"
      >
        <Form.Item label="First Name" name="firstName">
          <Input
            value={firstName}
            className="Form"
            placeholder="Jonathan"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName">
          <Input
            value={lastName}
            className="Form"
            placeholder="Wong"
            onChange={(event) => setLastName(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input
            value={email}
            className="Form"
            placeholder="jonathanwong@yahoo.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Item>
      </NewItemModalWrapper>
    </div>
  );
}

export default Employees;
