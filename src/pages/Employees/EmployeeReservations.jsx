import React from "react";
import InventoryTable from "./../../components/InventoryTable/InventoryTable";
import { Button } from "antd";

function EmployeeReservations() {
  return (
    <div>
      <div className="fullHeader">
        <h1 className="Header">Reservations</h1>
        <div>
          <Button
            className="addButton"
            type="primary"
            size="large"
            htmlType="submit"
            href="/emp/reservations/checkin"
          >
            Check In
          </Button>
          <Button
            className="addButton leftPadding"
            type="primary"
            size="large"
            htmlType="submit"
            href="/emp/reservations/checkout"
          >
            Check Out
          </Button>
        </div>
      </div>
      <InventoryTable fromEmployee />
    </div>
  );
}

export default EmployeeReservations;
