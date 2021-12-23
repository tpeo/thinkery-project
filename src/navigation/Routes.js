import React, { PureComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import pages
import LoginPage from "../pages/Login/LoginPage";
import ForgotPage from "../pages/Login/ForgotPage";
import EmployeeHome from "../pages/Employees/EmployeeHome";
import Orders from "../pages/Employees/Orders";
import Checkin from "../pages/Employees/Reservations/Checkin";
import Checkout from "../pages/Employees/Reservations/Checkout";
import Inventory from "../pages/Administrators/Inventory";
import Employees from "../pages/Administrators/Employees";
import AdminHome from "../pages/Administrators/AdminHome";
import Layout from "./../pages/Layout";
import NotFound from "../pages/NotFound/NotFound";

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
         <Route exact path="/" component={this.authComponent} />
         <Route exact path="/retrieve_credentials" component={ForgotPage} />
         {/* <Route path="/signup" component={SignUpPage} exact />  */}
         <Layout>
            <Switch>
               <Route exact path="/login" component={LoginPage} />
               <Route exact path='/orders' component={Orders}/>
               <Route exact path='/reservations/checkin' component={Checkin}/>
               <Route exact path='/reservations/checkout' component={Checkout}/>
               <Route exact path='/inventory' component={Inventory}/>
               <Route exact path='/employees' component={Employees}/>
               {/* <Route path='/home' component={EmployeeHome}/> */}
               <Route exact path='/home' component={AdminHome}/>
               <Route component={NotFound} />
            </Switch>
         </Layout>
      </Switch>
    );
  }
}
