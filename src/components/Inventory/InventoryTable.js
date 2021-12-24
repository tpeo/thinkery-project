import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Table, Row, Col, Space, Button } from "antd";
import "./../../pages/TablePage.css";
import writeEndpoints from "../../writeEndpoints";
import { useSelector } from "react-redux";

function InventoryTable({}) {
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
  //     quantity: 48,
  //     description: "Pack of 6 washable colored markers",
  //     brand: "Crayola",
  //     lastReorderDate: "11/10/21",
  //     itemID: "MA1690",
  //     instances: {},
  //   });

  //   writeEndpoints.addInventoryItem({
  //     name: "Crayon Packs",
  //     quantity: 20,
  //     description: "Pack of 24 crayons",
  //     brand: "Crayola",
  //     lastReorderDate: "11/20/21",
  //     itemID: "MA1691",
  //     instances: {},
  //   });

  const inventoryData = useSelector((state) => state.inventory);

  return (
    <Table
      onRow={(record, rowIndex) => {
        return {
          onClick: () => {
            history.push("/inventory/" + record.itemID);
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
      dataSource={Object.values(inventoryData)}
      columns={columns}
    />
  );
}

export default InventoryTable;
