import React, { useEffect } from "react";
import firebase from "./utils/firebase";
import "./style/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./navigation/Routes";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  addInventoryInstanceItem,
  addInventoryItem,
  addOrderRequest,
  addReservation,
  removeEmployee,
  removeInventoryInstanceItem,
  removeInventoryItem,
  removeOrderRequest,
  removeReservation,
  setUser,
} from "./redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

global.ADMINISTRATOR = 1;
global.EMPLOYEE = 2;

const onChildAddedOrChanged = (path, callback) => {
  firebase.database().ref(path).on("child_added", callback);
  firebase.database().ref(path).on("child_changed", callback);
};

const onChildRemoved = (path, callback) => {
  firebase.database().ref(path).on("child_removed", callback);
};

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.loggedIn);

  const attachListeners = () => {
    onChildAddedOrChanged("/orderRequests", (snapshot) => {
      dispatch(addOrderRequest(snapshot.key, snapshot.val()));
    });
    onChildRemoved("/orderRequests", (snapshot) => {
      dispatch(removeOrderRequest(snapshot.key));
    });

    onChildAddedOrChanged("/employees", (snapshot) => {
      dispatch(addEmployee(snapshot.key, snapshot.val()));
    });
    onChildRemoved("/employees", (snapshot) => {
      dispatch(removeEmployee(snapshot.key));
    });

    onChildAddedOrChanged("/reservations", (snapshot) => {
      dispatch(addReservation(snapshot.key, snapshot.val()));
    });
    onChildRemoved("/reservations", (snapshot) => {
      dispatch(removeReservation(snapshot.key));
    });

    onChildAddedOrChanged("/inventory", (snapshot) => {
      dispatch(addInventoryItem(snapshot.key, snapshot.val()));
    });
    onChildRemoved("/inventory", (snapshot) => {
      dispatch(removeInventoryItem(snapshot.key));
    });

    onChildAddedOrChanged("/inventoryInstances", (snapshot) => {
      dispatch(addInventoryInstanceItem(snapshot.key, snapshot.val()));
    });
    onChildRemoved("/inventoryInstances", (snapshot) => {
      dispatch(removeInventoryInstanceItem(snapshot.key));
    });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log(uid);
        console.log(isLoggedIn);
        if (isLoggedIn == false) {
          dispatch(
            setUser({
              employeeID: "",
              type: global.ADMINISTRATOR,
            })
          );
        }
      } else {
        console.log("signed out");
      }
    });

    attachListeners();
  }, [history, isLoggedIn]);

  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default connect()(App);
