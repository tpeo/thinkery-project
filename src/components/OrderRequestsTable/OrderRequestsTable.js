import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Table, Row, Col, Space, Button } from "antd";
import "./OrderRequestsTable.css";
import { useSelector } from "react-redux";

function OrderRequestsTable({ }) {
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
      filters: [
        {
          text: "Priority",
          value: "Priority",
        },
        {
          text: "Non-Priority",
          value: "Non-Priority",
        },
      ],
      onFilter: (value, orderReq) => orderReq.priority == value,
      filterSearch: true,
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
      filters: [
        {
          text: "Unprocessed",
          value: "Unprocessed",
        },
        {
          text: "Ordered",
          value: "Ordered",
        },
        {
          text: "Completed",
          value: "Completed",
        },
        {
          text: "Cancelled",
          value: "Cancelled",
        },
      ],
      onFilter: (value, orderReq) => orderReq.status == value,
      filterSearch: true,
    },
  ];

  const orderRequestsData = useSelector((state) => state.orderRequests);

  return (
    <Table dataSource={Object.values(orderRequestsData)} columns={columns} />
  );
}

export default OrderRequestsTable;
