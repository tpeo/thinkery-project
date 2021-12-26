import React, { PureComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import pages
import LoginPage from "../pages/Login/LoginPage";
import ForgotPage from "../pages/Login/ForgotPage";
import EmployeeHome from "../pages/Employees/EmployeeHome";
import Orders from "../pages/Orders";
import Checkin from "../pages/Employees/Checkin";
import Checkout from "../pages/Employees/Checkout";
import Inventory from "../pages/Administrators/Inventory";
import Employees from "../pages/Administrators/Employees";
import AdminHome from "../pages/Administrators/AdminHome";
import Layout from "./../pages/Layout";
import NotFound from "../pages/NotFound/NotFound";

// import History from "./History";

import "../style/App.css";
import InventoryInstances from "../pages/Administrators/InventoryInstances";
import { useSelector } from "react-redux";

export default function Routes() {
  const user = useSelector((state) => state.user);
  const isAdmin = user.type == 1;

  const authComponent = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    // TODO: fix this and set local storage item when logging in
    return isLoggedIn != null && isLoggedIn ? (
      <Redirect to="/home" />
    ) : (
      <LoginPage />
    );
  };

  return (
    <Switch>
      <Route exact path="/" component={authComponent} />
      <Route exact path="/retrieve_credentials" component={ForgotPage} />
      <Layout>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/orders" component={Orders} />
          {!isAdmin && (
            <Route exact path="/reservations/checkin" component={Checkin} />
          )}
          {!isAdmin && (
            <Route exact path="/reservations/checkout" component={Checkout} />
          )}
          {isAdmin && <Route exact path="/inventory" component={Inventory} />}
          {isAdmin && (
            <Route
              exact
              path="/inventory/:itemID"
              component={InventoryInstances}
            />
          )}
          {isAdmin && <Route exact path="/employees" component={Employees} />}
          <Route
            exact
            path="/home"
            component={isAdmin ? AdminHome : EmployeeHome}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Switch>
  );
}
