import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Table, Row, Col, Space, Button } from "antd";
import "./../../pages/TablePage.css";
import writeEndpoints from "../../writeEndpoints";
import { useSelector } from "react-redux";

function OrderRequestsTable({}) {
  const history = useHistory();
  const columns = [
    {
      title: "Request ID",
      dataIndex: "requestID",
      key: "requestID",
    },
    {
      title: "Request Date",
      dataIndex: "requestDate",
      key: "requestDate",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "Employee Name",
      dataIndex: "employeeName",
      key: "employeeName",
    },
    {
      title: "Employee Email",
      dataIndex: "employeeEmail",
      key: "employeeEmail",
    },
    {
      title: "Item Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const orderRequestsData = useSelector((state) => state.orderRequests);

  return (
    <Table dataSource={Object.values(orderRequestsData)} columns={columns} />
  );
}

export default OrderRequestsTable;
