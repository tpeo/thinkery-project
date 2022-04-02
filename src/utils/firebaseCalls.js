import firebase from "./firebase";

function addOrderRequest(orderRequestObj, updates = {}) {
  const orderRequestUid = firebase.database().ref("orderRequests/").push().key;
  orderRequestObj.requestID = orderRequestUid;
  updates["orderRequests/" + orderRequestUid] = orderRequestObj;

  firebase.database().ref().update(updates);
}

function removeOrderRequest(orderRequestUid, updates = {}) {
  updates["orderRequests/" + orderRequestUid] = null;

  firebase.database().ref().update(updates);
}

function updateOrderRequest(orderRequestUid, key, value, updates = {}) {
  updates["orderRequests/" + orderRequestUid + "/" + key] = value;

  firebase.database().ref().update(updates);
}

/******************************************/

function addEmployee(employeeObj, updates = {}) {
  updates["employees/" + employeeObj.employeeID] = employeeObj;

  firebase.database().ref().update(updates);
}

function removeEmployee(employeeUid, updates = {}) {
  updates["employees/" + employeeUid] = null;

  firebase.database().ref().update(updates);
}

function updateEmployee(employeeUid, key, value, updates = {}) {
  updates["employees/" + employeeUid + "/" + key] = value;

  firebase.database().ref().update(updates);
}

/******************************************/

function addReservation(reservationObj, itemID, updates = {}) {
  const instanceID = reservationObj.itemInstanceID;
  updates["reservations/" + reservationObj.reservationID] = reservationObj;

  updates["inventory/" + itemID + "/instances/" + instanceID] = true;
  updates["inventoryInstances/" + instanceID + "/reservationID"] =
    reservationObj.reservationID;

  firebase.database().ref().update(updates);
}

function removeReservation(reservationID, itemID, instanceID, updates = {}) {
  updates["reservations/" + reservationID] = null;

  updates["inventory/" + itemID + "/instances/" + instanceID] = false;
  updates["inventoryInstances/" + instanceID + "/reservationID"] = null;

  firebase.database().ref().update(updates);
}

function updateReservation(reservationUid, key, value, updates = {}) {
  updates["reservations/" + reservationUid + "/" + key] = value;

  firebase.database().ref().update(updates);
}

/******************************************/

function addInventoryItem(inventoryItemObj, updates = {}) {
  // const inventoryItemUid = firebase.database().ref("inventory/").push().key;
  // inventoryItemObj.itemID = inventoryItemUid;
  updates["inventory/" + inventoryItemObj.itemID] = inventoryItemObj;

  firebase.database().ref().update(updates);
}

function removeInventoryItem(inventoryItemID, updates = {}) {
  updates["inventory/" + inventoryItemID] = null;

  firebase.database().ref().update(updates);
}

function updateInventoryItem(inventoryItemID, key, value, updates = {}) {
  updates["inventory/" + inventoryItemID + "/" + key] = value;

  firebase.database().ref().update(updates);
}

/******************************************/

function addInventoryInstanceItem(inventoryInstanceObj, updates = {}) {
  updates["inventoryInstances/" + inventoryInstanceObj.instanceID] =
    inventoryInstanceObj;
  updates[
    "inventory/" +
      inventoryInstanceObj.itemID +
      "/instances/" +
      inventoryInstanceObj.instanceID
  ] = false;

  firebase.database().ref().update(updates);
}

function removeInventoryInstanceItem(
  inventoryItemUid,
  inventoryInstanceUid,
  updates = {}
) {
  updates["inventoryInstances/" + inventoryInstanceUid] = null;
  updates[
    "inventory/" + inventoryItemUid + "/instances/" + inventoryInstanceUid
  ] = null;

  firebase.database().ref().update(updates);
}

function updateInventoryInstanceItem(
  inventoryInstanceUid,
  key,
  value,
  updates = {}
) {
  updates["inventoryInstances/" + inventoryInstanceUid + "/" + key] = value;

  firebase.database().ref().update(updates);
}

export default {
  addOrderRequest,
  removeOrderRequest,
  updateOrderRequest,
  addEmployee,
  removeEmployee,
  updateEmployee,
  addReservation,
  removeReservation,
  updateReservation,
  addInventoryItem,
  removeInventoryItem,
  updateInventoryItem,
  addInventoryInstanceItem,
  removeInventoryInstanceItem,
  updateInventoryInstanceItem,
};
