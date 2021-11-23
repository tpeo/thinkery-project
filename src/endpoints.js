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

/******************************************/

function addEmployee(employeeObj, updates = {}) {
  const employeeUid = firebase.database().ref("employees/").push().key;
  employeeObj.employeeID = employeeUid;
  updates["employees/" + employeeUid] = employeeObj;

  firebase.database().ref().update(updates);
}

function removeEmployee(employeeUid, updates = {}) {
  updates["employees/" + employeeUid] = null;

  firebase.database().ref().update(updates);
}

/******************************************/

function addReservation(reservationObj, updates = {}) {
  const reservationUid = firebase.database().ref("reservations/").push().key;
  reservationObj.reservationID = reservationUid;
  updates["reservations/" + reservationUid] = reservationObj;

  firebase.database().ref().update(updates);
}

function removeReservation(reservationUid, updates = {}) {
  updates["reservations/" + reservationUid] = null;

  firebase.database().ref().update(updates);
}

/******************************************/

function addInventoryItem(inventoryItemObj, updates = {}) {
  const inventoryItemUid = firebase.database().ref("inventory/").push().key;
  inventoryItemObj.itemID = inventoryItemUid;
  updates["inventory/" + inventoryItemUid] = inventoryItemObj;

  firebase.database().ref().update(updates);
}

function removeInventoryItem(inventoryItemUid, updates = {}) {
  updates["inventory/" + inventoryItemUid] = null;

  firebase.database().ref().update(updates);
}

/******************************************/

function addInventoryInstanceItem(inventoryInstanceObj, updates = {}) {
  const inventoryInstanceUid = firebase
    .database()
    .ref("inventoryInstances/")
    .push().key;
  inventoryInstanceObj.instanceID = inventoryInstanceUid;
  updates["inventoryInstances/" + inventoryInstanceUid] = inventoryInstanceObj;
  updates[
    "inventory/" +
      inventoryInstanceObj.itemID +
      "/instances/" +
      inventoryInstanceUid
  ] = true;

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

export default {
  addOrderRequest,
  removeOrderRequest,
  addEmployee,
  removeEmployee,
  addReservation,
  removeReservation,
  addInventoryItem,
  removeInventoryItem,
  addInventoryInstanceItem,
  removeInventoryInstanceItem,
};
