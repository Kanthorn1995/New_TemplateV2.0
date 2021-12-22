import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Dropdown } from "antd";
import {
  HomeOutlined,
  PhoneOutlined,
  BookOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
const Menuitem = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item key="4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item key="5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item key="6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item key="7">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item key="8">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <CustomHeaderBar>
      <Menu mode="horizontal" defaultSelectedKeys={[activeMenu]}>
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          onClick={() => setActiveMenu("1")}
          style={{ backgroundColor: "red" }}
        >
          <Link to="/">Home</Link>
        </Menu.Item>
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
          <Menu.Item
            key="2"
            icon={<BookOutlined />}
            onClick={() => setActiveMenu("2")}
            style={{ backgroundColor: "red" }}
          >
            <Link to="/category"> Category</Link>
          </Menu.Item>
        </Dropdown>
        <Menu.Item
          key="3"
          icon={<ContainerOutlined />}
          onClick={() => setActiveMenu("3")}
          style={{ backgroundColor: "red" }}
        >
          <Link to="/blog">Blog</Link>
        </Menu.Item>

        <Menu.Item
          key="4"
          icon={<PhoneOutlined />}
          onClick={() => setActiveMenu("4")}
          style={{ backgroundColor: "red" }}
        >
          <Link to="/contactus">Contactus</Link>
        </Menu.Item>
      </Menu>
    </CustomHeaderBar>
  );
};

export default Menuitem;

const CustomHeaderBar = styled.div`
  background=color: red;
  color: white;
`;

// const MenuStyled = styled(Menu)`
//   background=color: red;
//   color: white;
// `;
