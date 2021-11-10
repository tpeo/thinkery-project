import React, { PureComponent } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// import pages
import LoginPage from "../pages/Login/LoginPage";
// import ForgotPage from "../pages/Login/ForgotPage";
// import SignUpPage from "../pages/SignUp/SignUpPage";
// import MainPage from "../pages/Dashboard/MainPage";
// import PatientPage from "../pages/PatientPage/PatientPage";
// import SettingsPage from "../pages/settings/SettingsPage";

// import global navbar
import GlobalNavigationBar from "./GlobalNavigationBar";

import { Layout } from "antd";

// import History from "./History";

import "../style/App.css";

const { Sider, Content } = Layout;

export default class Routes extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  authComponent = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("isLoggedIn", isLoggedIn);
    return isLoggedIn != null && isLoggedIn ? (
      <Redirect to="/dashboard" />
    ) : (
      <LoginPage></LoginPage>
    );
  };

  render() {
    return (
      <Router history={History}>
        <Switch>
          {/* <Route path="/" component={this.authComponent} exact />
          <Route path="/retrieve_credentials" component={ForgotPage} exact />
          <Route path="/signup" component={SignUpPage} exact /> */}
          <div>
            <Layout>
              <Sider
                style={{
                  overflow: "auto",
                  height: "auto",
                  backgroundColor: "#ADE7F950",
                }}
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
              >
                <GlobalNavigationBar toggleCollapsed={this.toggleCollapsed.bind(this)} />
              </Sider>
              <Content>
                <Route path="/login" component={LoginPage} />
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
