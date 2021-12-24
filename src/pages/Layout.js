import React from "react";
import { Layout as Format } from "antd";
import EmployeeNavigationBar from "./../navigation/EmployeeNavigationBar";
import AdminNavigationBar from "./../navigation/AdminNavigationBar";
import "./../style/App.css";

const { Header, Content, Footer } = Format;

const Layout = ({ children }) => {
  return (
    <Format>
      <Header style={{ backgroundColor: "#B12F23", padding: "50px 0px" }}>
        {/* <EmployeeNavigationBar /> */}
        <AdminNavigationBar />
      </Header>
      <Content style={{ padding: "0px 50px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ backgroundColor: "#FFFFFF", textAlign: "center" }}>
        Created by Texas Product Engineering Organization.
      </Footer>
    </Format>
  );
};

export default Layout;
