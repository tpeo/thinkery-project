import React, { PureComponent, useState } from "react";
import History from "./History";

import { Menu, Dropdown } from 'antd';
import {
  AppstoreOutlined,
  UserOutlined,
  MenuOutlined,
  SearchOutlined,
  LogoutOutlined,
  SettingOutlined,
  DownOutlined,
} from "@ant-design/icons";

import "./../style/App.css";

const { SubMenu } = Menu;

export default class EmployeeNavigationBar extends PureComponent {
  render() {
    return (
      <div>
        <Menu
          theme="light"
          style={{ backgroundColor: "#B12F23" }}
          defaultSelectedKeys={["1"]}
          mode="horizontal"
        >
          <Menu.Item key="0">
              thinkventory
          </Menu.Item>
          <SubMenu
            onClick={() => History.push("/orders")}
            key="1"
            icon={<AppstoreOutlined />}
            title="Orders"
          >
            <Menu.Item key="2">Check In</Menu.Item>
            <Menu.Item key="3">Check Out</Menu.Item>
          </SubMenu>
          <SubMenu
            onClick={() => History.push("/reservations")}
            key="4"
            icon={<UserOutlined />}
            title="Reservations"
          >
            <Menu.Item key="5">Check In</Menu.Item>
            <Menu.Item key="6">Check Out</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}