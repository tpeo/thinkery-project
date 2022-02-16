import React, { PureComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import pages
import LoginPage from "../pages/Login/LoginPage";
import ForgotPage from "../pages/Login/ForgotPage";
import AdminOrders from "../pages/Administrators/AdminOrders";
import Checkin from "../pages/Employees/Checkin";
import Checkout from "../pages/Employees/Checkout";
import Inventory from "../pages/Administrators/Inventory";
import Employees from "../pages/Administrators/Employees";
import Layout from "../components/Layout/Layout";
import NotFound from "../pages/NotFound/NotFound";

import "../style/App.css";
import InventoryInstances from "../pages/Administrators/InventoryInstances";
import { useSelector } from "react-redux";
import EmployeeReservations from "../pages/Employees/EmployeeReservations";
import AdminReservations from "../pages/Administrators/AdminReservations";
import EmployeeOrders from "../pages/Employees/EmployeeOrders";

export default function Routes() {
  const user = useSelector((state) => state.user);
  const isAdmin = user.type == 1;

  const authComponent = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    // TODO: fix this and set local storage item when logging in
    return isLoggedIn != null && isLoggedIn ? (
      <Redirect to="/orders" />
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
          {isAdmin ? (
            <>
              <Route exact path="/admin/orders" component={AdminOrders} />
              <Route exact path="/admin/inventory" component={Inventory} />
              <Route
                exact
                path="/admin/inventory/:itemID"
                component={InventoryInstances}
              />
              <Route exact path="/admin/employees" component={Employees} />
              <Route
                exact
                path="/admin/reservations"
                component={AdminReservations}
              />
            </>
          ) : (
            <>
              <Route exact path="/emp/orders" component={EmployeeOrders} />
              <Route
                exact
                path="/emp/reservations"
                component={EmployeeReservations}
              />
              <Route
                exact
                path="/emp/reservations/checkin"
                component={Checkin}
              />
              <Route
                exact
                path="/emp/reservations/checkout"
                component={Checkout}
              />
              <Route
                exact
                path="/emp/reservations/:itemID"
                component={InventoryInstances}
              />
            </>
          )}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Switch>
  );
}
