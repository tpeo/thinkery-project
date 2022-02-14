import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Table, Row, Col, Space, Button } from "antd";
import { useSelector } from "react-redux";

function EmployeesTable() {
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Employee ID",
      dataIndex: "employeeID",
      key: "employeeID",
    },
  ];

  const employees = useSelector((state) => state.employees);

  return (
    <Table dataSource={Object.values(employees || {})} columns={columns} />
  );
}

export default EmployeesTable;
