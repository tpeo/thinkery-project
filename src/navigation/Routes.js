import React, { PureComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import pages
import LoginPage from "../pages/Login/LoginPage";
import EmployeeHome from "../pages/Employees/EmployeeHome";
import Orders from "../pages/Employees/Orders";
import Checkin from "../pages/Employees/Reservations/Checkin";
import Checkout from "../pages/Employees/Reservations/Checkout";
import Inventory from "../pages/Administrators/Inventory";
import Employees from "../pages/Administrators/Employees";
import AdminHome from "../pages/Administrators/AdminHome";
import Layout from "./../pages/Layout";

// import History from "./History";

import "../style/App.css";

const { Header, Content } = Layout;

export default class Routes extends PureComponent {
  constructor() {
    super();
  }

  authComponent = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("isLoggedIn", isLoggedIn);
    return isLoggedIn != null && isLoggedIn ? (
      <Redirect to="/home" />
    ) : (
      <LoginPage></LoginPage>
    );
  };

  render() {
    return (
      <Switch>
         <Route path="/" component={this.authComponent} exact />
         {/*<Route path="/retrieve_credentials" component={ForgotPage} exact />
         <Route path="/signup" component={SignUpPage} exact /> */}
         <div>
            <Layout>
               <Route path="/login" component={LoginPage} />
               <Route path='/orders' component={Orders}/>
               <Route path='/reservations/checkin' component={Checkin}/>
               <Route path='/reservations/checkout' component={Checkout}/>
               <Route path='/inventory' component={Inventory}/>
               <Route path='/employees' component={Employees}/>
               {/* <Route path='/home' component={EmployeeHome}/> */}
               <Route path='/home' component={AdminHome}/>
            </Layout>
         </div>
      </Switch>
    );
  }
}
