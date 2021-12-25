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
            Add a new inventory item!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
          >
            <Form.Item label="Name" name="itemName">
              <Input className="Form" placeholder="Crayon Packs" />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input className="Form" placeholder="Pack of 24 crayons" />
            </Form.Item>
            <Form.Item label="Brand" name="brand">
              <Input className="Form" placeholder="Crayola" />
            </Form.Item>
            <Form.Item label="Quantity" name="quantity">
              <Input className="Form" placeholder="30" />
            </Form.Item>
            <Form.Item className="SubmitFormButton">
              <Button
                className="LoginButton"
                type="primary"
                size="large"
                htmlType="submit"
                onClick={() => setModal(false)}
              >
                Add
              </Button>
            </Form.Item>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Inventory;
