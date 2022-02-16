import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "antd";
import { useParams } from "react-router";
import InventoryInstancesTable from "../../components/InventoryInstancesTable/InventoryInstancesTable";
import NewItemModalWrapper from "../../components/NewItemModalWrapper/NewItemModalWrapper";
import firebaseCalls from "../../utils/firebaseCalls";
import { getThreeDigitNum } from "../../utils/funcs";

function InventoryInstances() {
  const { itemID } = useParams();
  const userType = useSelector((state) => state.user?.type);

  const [addInstanceModal, setAddInstanceModal] = useState(false);
  const [description, setDescription] = useState("");

  const inventoryItem = useSelector((state) => state.inventory?.[itemID]);
  const inventoryInstances = useSelector((state) => state.inventoryInstances);

  const submitAddInstance = () => {
    let instanceID = getThreeDigitNum();

    while (inventoryInstances?.[`IS${itemID.substring(2)}-${instanceID}`]) {
      instanceID = getThreeDigitNum();
    }

    firebaseCalls.addInventoryInstanceItem({
      itemID,
      instanceID: `IS${itemID.substring(2)}-${instanceID}`,
      description,
    });
    setAddInstanceModal(false);
  };

  // Special cases - shouldn't show inventory instance data
  if (itemID == "checkin" || itemID == "checkout") return null;

  return (
    <div>
      <div className="fullHeader">
        <h1 className="Header">{inventoryItem?.name}</h1>
        {userType == global.ADMINISTRATOR && (
          <Button
            className="addButton"
            type="primary"
            size="large"
            htmlType="submit"
            onClick={() => setAddInstanceModal(true)}
          >
            New Instance
          </Button>
        )}
      </div>
      <InventoryInstancesTable inventoryItem={inventoryItem} />
      <NewItemModalWrapper
        title="New Inventory Item Instance"
        showModal={addInstanceModal}
        onHide={() => setAddInstanceModal(false)}
        onSubmit={submitAddInstance}
        submitText="Add Instance"
      >
        {/* <Form.Item label="Instance ID" name="instanceID">
          <Input
            value={instanceID}
            className="Form"
            placeholder="CP1234"
            onChange={(event) => setInstanceID(event.target.value)}
          />
        </Form.Item> */}
        <Form.Item label="Notes/Description" name="description">
          <Input
            value={description}
            className="Form"
            placeholder="Set of blue crayons"
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Item>
      </NewItemModalWrapper>
    </div>
  );
}

export default InventoryInstances;
