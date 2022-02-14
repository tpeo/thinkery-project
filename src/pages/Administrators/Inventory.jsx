import React, { useState } from "react";
import InventoryTable from "./../../components/InventoryTable/InventoryTable";
import { Form, Input, Button } from "antd";
import "../TablePage.css";
import firebaseCalls from "../../firebase/firebaseCalls";
import NewItemModalWrapper from "../../components/NewItemModalWrapper/NewItemModalWrapper";

function Inventory() {
  const [addItemModal, setAddItemModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");

  const submitAddItem = () => {
    setAddItemModal(false);

    firebaseCalls.addInventoryItem({
      itemID: "MA1692",
      name,
      brand,
      description,
      quantity: 0,
      lastReorderDate: "12/25/2021",
    });

    setName("");
    setBrand("");
    setDescription("");
  };

  return (
    <div>
      <div className="fullHeader">
        <h1 className="Header">Inventory</h1>
        <Button
          className="addButton"
          type="primary"
          size="large"
          htmlType="submit"
          onClick={() => setAddItemModal(true)}
        >
          New Item
        </Button>
      </div>
      <InventoryTable />
      <NewItemModalWrapper
        title="New Inventory Item"
        showModal={addItemModal}
        onHide={() => setAddItemModal(false)}
        onSubmit={submitAddItem}
        submitText="Add Item"
      >
        <Form.Item label="Name" name="itemName">
          <Input
            value={name}
            className="Form"
            placeholder="Crayon Packs"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input
            value={description}
            className="Form"
            placeholder="Pack of 24 crayons"
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Brand" name="brand">
          <Input
            value={brand}
            className="Form"
            placeholder="Crayola"
            onChange={(event) => setBrand(event.target.value)}
          />
        </Form.Item>
      </NewItemModalWrapper>
    </div>
  );
}

export default Inventory;
