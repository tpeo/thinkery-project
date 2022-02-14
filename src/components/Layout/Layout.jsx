import React from "react";
import { Layout as Format } from "antd";
import EmployeeNavigationBar from "../EmployeeNavigationBar/EmployeeNavigationBar";
import AdminNavigationBar from "../AdminNavigationBar/AdminNavigationBar";
import "../../style/App.css";
import { useSelector } from "react-redux";

const { Header, Content, Footer } = Format;

const Layout = ({ children }) => {
  const user = useSelector((state) => state.user);
  const isAdmin = user.type == 1;

  return (
    <Format>
      <Header style={{ backgroundColor: "#B12F23", padding: "50px 0px" }}>
        {isAdmin ? <AdminNavigationBar /> : <EmployeeNavigationBar />}
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
