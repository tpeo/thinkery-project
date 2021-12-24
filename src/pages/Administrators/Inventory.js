import React, { useState } from "react";
import InventoryTable from "./../../components/Tables/InventoryTable";
import "../TablePage.css";

function Inventory() {
  return (
    <div>
      <h1 className="Header">Inventory</h1>
      <InventoryTable />
    </div>
  );
}

export default Inventory;
