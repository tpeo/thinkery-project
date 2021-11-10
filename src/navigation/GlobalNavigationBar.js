import React, { PureComponent } from "react";
import History from "./History";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  MenuOutlined,
  SearchOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

// import Path logo
import Logo from "../img/logo/logo.png";

import "./../style/App.css";

export default class GlobalNavigationBar extends PureComponent {
  render() {
    return (
      <div>
        <Menu
          theme="light"
          style={{ backgroundColor: "#ADE7F950" }}
          mode="inline"
          defaultSelectedKeys={["3"]}
          inlineCollapsed={true}
        >
          <Menu.Item
            onClick={this.props.toggleCollapsed}
            key="1"
            icon={<MenuOutlined />}
          />
          <Menu.Item
            onClick={() => History.push("/dashboard")}
            key="3"
            icon={<AppstoreOutlined />}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            onClick={() => History.push("/patient")}
            key="4"
            icon={<UserOutlined />}
          >
            Patients
          </Menu.Item>
          <Menu.Item
            onClick={() => History.push("/my_account")}
            key="5"
            icon={<SettingOutlined />}
          >
            Settings
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              const isLoggedIn = localStorage.getItem("isLoggedIn");
              console.log("isLoggedIn", isLoggedIn);
              localStorage.clear();
              const updatedIsLoggedIn = localStorage.getItem("isLoggedIn");
              console.log("updatedIsLoggedIn", updatedIsLoggedIn);
              History.push("/");
            }}
            key="6"
            icon={<LogoutOutlined />}
          >
            Logout
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
