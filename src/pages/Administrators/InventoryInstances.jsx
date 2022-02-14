import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import InventoryInstancesTable from "../../components/InventoryInstancesTable/InventoryInstancesTable";

function InventoryInstances() {
  const { itemID } = useParams();

  const inventoryItem = useSelector((state) => state.inventory[itemID]);

  // Special cases - shouldn't show inventory instance data
  if (itemID == "checkin" || itemID == "checkout") return null;

  return (
    <div>
      <h1 className="Header">{inventoryItem?.name}</h1>
      <InventoryInstancesTable inventoryItem={inventoryItem} />
    </div>
  );
}

export default InventoryInstances;
