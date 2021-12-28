const ADMINISTRATOR = 1;
const EMPLOYEE = 2;

const defaultState = {
  user: {
    employeeID: "",
    type: ADMINISTRATOR, // TODO: Change this later accordingly
  },
  orderRequests: {},
  employees: {},
  reservations: {},
  inventory: {},
  inventoryInstances: {},
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_ORDER_REQUEST":
      return {
        ...state,
        orderRequests: {
          ...state.orderRequests,
          [action.requestID]: action.payload,
        },
      };
    case "REMOVE_ORDER_REQUEST":
      const { [action.requestID]: orderReq, ...newOrderRequests } =
        state.orderRequests;
      return {
        ...state,
        orderRequests: newOrderRequests,
      };
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: {
          ...state.employees,
          [action.employeeID]: action.payload,
        },
      };
    case "REMOVE_EMPLOYEE":
      const { [action.employeeID]: employee, ...newEmployees } =
        state.employees;
      return {
        ...state,
        employees: newEmployees,
      };
    case "ADD_RESERVATION":
      return {
        ...state,
        reservations: {
          ...state.reservations,
          [action.reservationID]: action.payload,
        },
      };
    case "REMOVE_RESERVATION":
      const { [action.reservationID]: reservation, ...newReservations } =
        state.reservations;
      return {
        ...state,
        reservations: newReservations,
      };
    case "ADD_INVENTORY_ITEM":
      return {
        ...state,
        inventory: {
          ...state.inventory,
          [action.inventoryItemID]: action.payload,
        },
      };
    case "REMOVE_INVENTORY_ITEM":
      const { [action.inventoryItemID]: invItem, ...newInventory } =
        state.inventory;
      return {
        ...state,
        inventory: newInventory,
      };
    case "ADD_INVENTORY_INSTANCE_ITEM":
      return {
        ...state,
        inventoryInstances: {
          ...state.inventoryInstances,
          [action.inventoryInstanceItemID]: action.payload,
        },
      };
    case "REMOVE_INVENTORY_INSTANCE_ITEM":
      const {
        [action.inventoryInstanceItemID]: invInstanceItem,
        ...newInventoryInstances
      } = state.inventory;
      return {
        ...state,
        inventoryInstances: newInventoryInstances,
      };
    default:
      return state;
  }
}

export default reducer;
