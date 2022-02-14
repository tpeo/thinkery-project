export const setUser = (payload) => ({
  type: "SET_USER",
  payload,
});

export const addOrderRequest = (requestID, payload) => ({
  type: "ADD_ORDER_REQUEST",
  requestID,
  payload,
});

export const removeOrderRequest = (requestID) => ({
  type: "REMOVE_ORDER_REQUEST",
  requestID,
});

export const addEmployee = (employeeID, payload) => ({
  type: "ADD_EMPLOYEE",
  employeeID,
  payload,
});

export const removeEmployee = (employeeID) => ({
  type: "REMOVE_EMPLOYEE",
  employeeID,
});

export const addReservation = (reservationID, payload) => ({
  type: "ADD_RESERVATION",
  reservationID,
  payload,
});

export const removeReservation = (reservationID) => ({
  type: "REMOVE_RESERVATION",
  reservationID,
});

export const addInventoryItem = (inventoryItemID, payload) => ({
  type: "ADD_INVENTORY_ITEM",
  inventoryItemID,
  payload,
});

export const removeInventoryItem = (inventoryItemID) => ({
  type: "REMOVE_INVENTORY_ITEM",
  inventoryItemID,
});

export const addInventoryInstanceItem = (inventoryInstanceItemID, payload) => ({
  type: "ADD_INVENTORY_INSTANCE_ITEM",
  inventoryInstanceItemID,
  payload,
});

export const removeInventoryInstanceItem = (inventoryInstanceItemID) => ({
  type: "REMOVE_INVENTORY_INSTANCE_ITEM",
  inventoryInstanceItemID,
});
