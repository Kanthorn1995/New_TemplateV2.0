import React from "react";
import styled from "styled-components";
import { Layout, Input, Avatar, Menu, Dropdown } from "antd";
import Menuitem from "../MenuItem";
import { UserOutlined, LockOutlined, UserAddOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Header } = Layout;
const Headerbar = () => {
  const onSearch = (value) => console.log(value);
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<LockOutlined />}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          เข้าสู่ระบบ
        </a>
      </Menu.Item>

      <Menu.Item key="2" icon={<UserAddOutlined />}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          สมัครสมาชิก
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          height: 70,
          position: "sticky",

          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: "red",
        }}
      >
        <CustomMemuItem>
          <Logo>Logo</Logo>
          <Menuitem />
        </CustomMemuItem>

        <CustomSearch>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 250 }}
          />
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Avatar icon={<UserOutlined />} style={{ marginLeft: 20 }} />
          </Dropdown>
        </CustomSearch>
      </Header>
    </>
  );
};

export default Headerbar;

const Logo = styled.div`
  color: white;
  width: 70px;
  height: 70px;
  background-color: red;
  text-align: center;
`;

const CustomSearch = styled.div`
  height: 70px;
  /* padding: 18px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomMemuItem = styled.div`
  display: flex;
  width: 100%;
`;
