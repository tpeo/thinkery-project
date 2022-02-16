import React, { useState } from "react";
import InventoryTable from "./../../components/InventoryTable/InventoryTable";
import { Form, Input, Button } from "antd";
import "../TablePage.css";
import firebaseCalls from "../../utils/firebaseCalls";
import NewItemModalWrapper from "../../components/NewItemModalWrapper/NewItemModalWrapper";
import { useSelector } from "react-redux";
import { getFourDigitNum } from "../../utils/funcs";

function Inventory() {
  const inventoryItems = useSelector((state) => state.inventory);

  const [addItemModal, setAddItemModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");

  const submitAddItem = () => {
    setAddItemModal(false);

    let itemID = getFourDigitNum();

    while (Boolean(inventoryItems?.["IT" + itemID])) {
      itemID = getFourDigitNum();
    }

    firebaseCalls.addInventoryItem({
      itemID: "IT" + itemID,
      name,
      brand,
      description,
      lastReorderDate: "N/A",
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
