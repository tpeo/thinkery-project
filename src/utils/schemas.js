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
  quantity: "",
  lastReorderDate: "",
  instances: {}, // instanceID to true - want in form of object rather than list
};

export const instanceItem = {
  itemID: "", // ID of corresponding item
  instanceID: "",
  reservationID: "", // only if reserved, use this to get rest of the data
};

export const reservationItem = {
  reservationID: "",
  itemInstanceID: "", // use this to get item data
  reservationStatus: 0, // default to "in-progress"
  currentEmployee: "",
  employeeEmail: "",
  program: "",
  reservationStartDate: "",
  reservationEndDate: "",
  description: "",
};
