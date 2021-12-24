import React from "react";
// import Highlighter from "react-highlight-words";

import { Input, Table, Row, Col, Space, Button } from "antd";
import "./../../pages/TablePage.css";

import History from "../../navigation/History";

export default class InventoryTable extends React.Component {
  render() {
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
        title: "Last Recorded",
        dataIndex: "last",
        key: "last",
      },
      {
        title: "Item ID",
        dataIndex: "id",
        key: "id",
      },
    ];

    const data = [
      {
        key: "1",
        name: "Marker Packs",
        quantity: 48,
        description: "Pack of 6 washable colored markers",
        brand: "Crayola",
        last: "11/10/21",
        id: "MA1690",
      },
      {
        key: "1",
        name: "Crayon Packs",
        quantity: 20,
        description: "Pack of 24 crayons",
        brand: "Crayola",
        last: "11/20/21",
        id: "MA1691",
      },
    ];

    return <Table dataSource={data} columns={columns} />;
  }
}
