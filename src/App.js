import React, { useEffect } from "react";
import firebase from "./firebase";
import logo from "./logo.svg";
import "./style/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./navigation/Routes";
import History from "./navigation/History";
import { connect } from "react-redux";

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log(uid);
      } else {
        console.log("signed out");
      }
    });
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
