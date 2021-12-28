import React from "react";
import InventoryTable from "./../../components/Tables/InventoryTable";
import { Button } from "antd";
import "../TablePage.css";

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
            href="/reservations/checkin"
          >
            Check In
          </Button>
          <Button
            className="addButton leftPadding"
            type="primary"
            size="large"
            htmlType="submit"
            href="/reservations/checkout"
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