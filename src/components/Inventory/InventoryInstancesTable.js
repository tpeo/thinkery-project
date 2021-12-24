import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Table, Row, Col, Space, Button } from "antd";
import "./../../pages/TablePage.css";
import writeEndpoints from "../../writeEndpoints";
import { useSelector } from "react-redux";

function InventoryInstancesTable({ inventoryItem }) {
  const history = useHistory();
  const columns = [
    {
      title: "Instance ID",
      dataIndex: "instanceID",
      key: "instanceID",
    },
    {
      title: "Reservation Status",
      dataIndex: "reservationStatus",
      key: "reservationStatus",
    },
    {
      title: "Current Employee",
      dataIndex: "currentEmployee",
      key: "currentEmployee",
    },
    {
      title: "Employee Email",
      dataIndex: "employeeEmail",
      key: "employeeEmail",
    },
    {
      title: "Program",
      dataIndex: "program",
      key: "program",
    },
    {
      title: "Reservation End Date",
      dataIndex: "reservationEndDate",
      key: "reservationEndDate",
    },
  ];

  //   writeEndpoints.addInventoryItem({
  //     name: "Marker Packs",
  //     quantity: 48,
  //     description: "Pack of 6 washable colored markers",
  //     brand: "Crayola",
  //     lastReorderDate: "11/10/21",
  //     itemID: "MA1690",
  //     instances: {},
  //   });

  //   writeEndpoints.addInventoryItem({
  //     name: "Crayon Packs",
  //     quantity: 20,
  //     description: "Pack of 24 crayons",
  //     brand: "Crayola",
  //     lastReorderDate: "11/20/21",
  //     itemID: "MA1691",
  //     instances: {},
  //   });

  return (
    <Table
      dataSource={Object.values(inventoryItem?.instances ?? {})}
      columns={columns}
    />
  );
}

export default InventoryInstancesTable;
