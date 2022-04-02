export const orderRequest = {
  employeeID: "", // used to retrieve employee name/email
  priority: false,
  newItem: false,
  name: "",
  brand: "",
  quantity: 0,
  packagingType: "",
  description: "",
  requestID: "", // auto-generated on back-end
  requestDate: "", // filled in on back-end
  status: 0, // default to "unprocessed"
};

export const employee = {
  firstName: "",
  lastName: "",
  email: "",
  employeeID: "",
};

export const inventoryItem = {
  itemID: "",
  name: "",
  brand: "",
  description: "",
  lastReorderDate: "",
  instances: {}, // available instances, maps instanceID to TRUE if reserved and FALSE if not
};

export const instanceItem = {
  itemID: "", // ID of corresponding item
  instanceID: "",
  reservationID: "", // only if reserved, use this to get rest of the data
  description: "",
};

export const reservationItem = {
  reservationID: "",
  itemInstanceID: "", // use this to get item data
  reservationStatus: 0, // 0 - AVAILABLE, 1 - RESERVED, 2 - OVERDUE/MISSING
  currentEmployee: "",
  employeeEmail: "",
  program: "",
  reservationStartDate: "",
  reservationEndDate: "",
  description: "",
};
