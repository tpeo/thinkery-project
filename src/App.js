import React, { useEffect } from "react";
import firebase from "./firebase";
import logo from "./logo.svg";
import "./style/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./navigation/Routes";
import History from "./navigation/History";
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
} from "./actions";
import "bootstrap/dist/css/bootstrap.min.css";

const onChildAddedOrChanged = (path, callback) => {
  firebase.database().ref(path).on("child_added", callback);
  firebase.database().ref(path).on("child_changed", callback);
};

const onChildRemoved = (path, callback) => {
  firebase.database().ref(path).on("child_removed", callback);
};

function App() {
  const dispatch = useDispatch();

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
        // TODO: Set user in redux in the future once we have more info
      } else {
        console.log("signed out");
      }
    });

    attachListeners();
  }, []);

  return (
    <div className="App">
      <Router history={History}>
        <Routes />
      </Router>
    </div>
  );
}

export default connect()(App);
