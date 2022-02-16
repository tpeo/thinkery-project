import React from "react";
import { Input, Table, Row, Col, Space, Button } from "antd";
import { useSelector } from "react-redux";

function AdminReservationsTable() {
  const columns = [
    {
      title: "Reservation ID",
      dataIndex: "reservationID",
      key: "reservationID",
    },
    {
      title: "Item Instance ID",
      dataIndex: "itemInstanceID",
      key: "itemInstanceID",
    },
    {
      title: "Item Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Employee Name",
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
      title: "Reservation Status",
      dataIndex: "reservationStatus",
      key: "reservationStatus",
    },
    {
      title: "Start Date",
      dataIndex: "reservationStartDate",
      key: "reservationStartDate",
    },
    {
      title: "End Date",
      dataIndex: "reservationEndDate",
      key: "reservationEndDate",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  const reservations = useSelector((state) => state.reservations);
  const items = useSelector((state) => state.inventory);
  const instances = useSelector((state) => state.inventoryInstances);

  const fullReservations = Object.values(reservations ?? {}).map(
    (reservation) => {
      return {
        ...(items?.[instances?.[reservation?.itemInstanceID]?.itemID] ?? {}),
        ...reservation,
      };
    }
  );

  return <Table dataSource={fullReservations} columns={columns} />;
}

export default AdminReservationsTable;
