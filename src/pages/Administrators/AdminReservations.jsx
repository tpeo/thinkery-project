import React from "react";
import InventoryTable from "./../../components/InventoryTable/InventoryTable";
import { Button } from "antd";
import AdminReservationsTable from "../../components/AdminReservationsTable/AdminReservationsTable";

function AdminReservations() {
  return (
    <div>
      <div className="fullHeader">
        <h1 className="Header">Reservations</h1>
      </div>
      <AdminReservationsTable />
    </div>
  );
}

export default AdminReservations;
