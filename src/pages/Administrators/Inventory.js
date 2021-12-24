import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import InventoryTable from "./../../components/Tables/InventoryTable";
import { Form, Input, Button } from "antd";
import "../TablePage.css";

function Inventory() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className="fullHeader">
        <h1 className="Header">Inventory</h1>
        <Button
          className="addButton"
          type="primary"
          size="large"
          htmlType="submit"
          onClick={() => setModal(true)}
        >
          New Item
        </Button>
      </div>
      <InventoryTable />
      <Modal
        size="lg"
        show={modal}
        onHide={() => setModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  );
}

export default Inventory;
