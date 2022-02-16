import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Table, Row, Col, Space, Button } from "antd";
import "./InventoryTable.css";
import { useSelector } from "react-redux";

function InventoryTable({ fromEmployee = false }) {
  const history = useHistory();
  const columns = [
    {
      title: "Item Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Last Reordered",
      dataIndex: "lastReorderDate",
      key: "lastReorderDate",
    },
    {
      title: "Item ID",
      dataIndex: "itemID",
      key: "itemID",
    },
  ];

  //   writeEndpoints.addInventoryItem({
  //     name: "Marker Packs",
  //     description: "Pack of 6 washable colored markers",
  //     brand: "Crayola",
  //     lastReorderDate: "11/10/21",
  //     itemID: "MA1690",
  //     instances: {},
  //   });

  //   writeEndpoints.addInventoryItem({
  //     name: "Crayon Packs",
  //     description: "Pack of 24 crayons",
  //     brand: "Crayola",
  //     lastReorderDate: "11/20/21",
  //     itemID: "MA1691",
  //     instances: {},
  //   });

  const inventoryData = useSelector((state) => state.inventory);
  const allInventory = Object.values(inventoryData || {}).map((item) => {
    return {
      ...item,
      quantity:
        Object.keys(item?.instances ?? {}).length +
        Object.keys(item?.reservedInstances ?? {}).length,
    };
  });

  return (
    <Table
      onRow={(record, rowIndex) => {
        return {
          onClick: () => {
            history.push(
              (fromEmployee ? "/emp/reservations/" : "/admin/inventory/") +
                record.itemID
            );
            document.body.style.cursor = "default";
          },
          onMouseEnter: () => {
            document.body.style.cursor = "pointer";
          },
          onMouseLeave: () => {
            document.body.style.cursor = "default";
          },
        };
      }}
      dataSource={allInventory}
      columns={columns}
    />
  );
}

export default InventoryTable;
