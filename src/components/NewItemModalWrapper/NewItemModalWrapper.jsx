import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form, Input, Button } from "antd";
import "./NewItemModalWrapper.css";

function NewItemModalWrapper({
  onHide,
  showModal,
  title,
  submitText,
  onSubmit,
  children,
}) {
  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form name="basic" layout="vertical" initialValues={{ remember: true }}>
          {children}
          <Form.Item className="SubmitFormButton">
            <Button
              className="LoginButton"
              type="primary"
              size="large"
              htmlType="submit"
              onClick={onSubmit}
            >
              {submitText}
            </Button>
          </Form.Item>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default NewItemModalWrapper;
