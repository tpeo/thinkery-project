import React from "react";
import { Input, Table, Row, Col, Space, Button } from "antd";
import { useSelector } from "react-redux";

const EMPTY_INSTANCE = {
  instanceID: "N/A",
  reservationStatus: "N/A",
  currentEmployee: "N/A",
  employeeEmail: "N/A",
  program: "N/A",
  reservationEndDate: "N/A",
  description: "N/A",
};

function InventoryInstancesTable({ inventoryItem }) {
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
    {
      title: "Notes/Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  const inventoryInstances = useSelector((state) => state.inventoryInstances);
  const reservations = useSelector((state) => state.reservations);

  const itemInstances = Object.keys(inventoryItem?.instances ?? {}).map(
    (instanceID) => {
      const instanceObj = inventoryInstances?.[instanceID] ?? {};
      return {
        ...EMPTY_INSTANCE,
        ...instanceObj,
        ...reservations?.[instanceObj.reservationID],
      };
    }
  );

  return <Table dataSource={itemInstances} columns={columns} />;
}

export default InventoryInstancesTable;
