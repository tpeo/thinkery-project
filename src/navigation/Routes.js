import React, { PureComponent } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// import pages
import LoginPage from "../pages/Login/LoginPage";
// import ForgotPage from "../pages/Login/ForgotPage";
// import SignUpPage from "../pages/SignUp/SignUpPage";
import MainPage from "../pages/Employees/MainPage";
// import PatientPage from "../pages/PatientPage/PatientPage";
// import SettingsPage from "../pages/settings/SettingsPage";

// import global navbar
import EmployeeNavigationBar from "./EmployeeNavigationBar";

import { Layout } from "antd";

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
      <Redirect to="/orders" />
    ) : (
      <LoginPage></LoginPage>
    );
  };

  render() {
    return (
      <Router history={History}>
        <Switch>
          {<Route path="/" component={this.authComponent} exact />
          /*<Route path="/retrieve_credentials" component={ForgotPage} exact />
          <Route path="/signup" component={SignUpPage} exact /> */}
          <div>
            <Layout>
              <Header
                style={{
                  overflow: "auto",
                  height: "auto",
                  backgroundColor: "#B12F23",
                }}
                trigger={null}
              >
                <EmployeeNavigationBar />
              </Header>
              <Content>
                <Route path="/login" component={LoginPage} />
                <Route path="/orders" component={MainPage} />
                {/* <Route path="/dashboard" component={MainPage} />
                <Route path="/patient" component={PatientPage} />
                <Route path="/my_account" component={SettingsPage} /> */}
              </Content>
            </Layout>
          </div>
        </Switch>
      </Router>
    );
  }
}
