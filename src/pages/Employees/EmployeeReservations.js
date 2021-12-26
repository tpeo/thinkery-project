import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import InventoryTable from "./../../components/Tables/InventoryTable";
import { Form, Input, Button } from "antd";
import "../TablePage.css";
import firebaseCalls from "../../firebaseCalls";
import NewItemModalWrapper from "../../components/NewItemModalWrapper";

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
      <InventoryTable />
    </div>
  );
}

export default EmployeeReservations;
