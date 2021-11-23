const defaultState = {
  user: {
    employeeID: "",
    type: 0,
  },
  orderRequest: {
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
  },
  employee: {
    firstName: "",
    lastName: "",
    email: "",
    employeeID: "",
  },
  inventoryItem: {
    itemID: "",
    name: "",
    brand: "",
    description: "",
    quantity: "",
    lastReorderDate: "",
    instances: {}, // instanceID to true - want in form of object rather than list
  },
  instanceItem: {
    itemID: "", // ID of corresponding item
    instanceID: "",
    name: "", // not sure if needed since contained in inventoryItem
    brand: "", // not sure if needed since contained in inventoryItem
    reservationID: "", // only if reserved
    reservationStatus: 0, // default to "in-progress"
    currentEmployee: "",
    employeeEmail: "",
    program: "",
    reservationStartDate: "", // current date
    reservationEndDate: "",
    description: "",
  },
  reservationItem: {
    reservationID: "",
    itemInstanceID: "", // can use this to get rest of the data
  },
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
