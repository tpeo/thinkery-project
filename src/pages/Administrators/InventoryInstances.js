import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "../TablePage.css";

function InventoryInstances() {
  const { itemID } = useParams();
  const inventoryItem = useSelector((state) => state.inventory[itemID]);

  return (
    <div>
      <h1 className="Header">{inventoryItem.name}</h1>
    </div>
  );
}

export default InventoryInstances;
