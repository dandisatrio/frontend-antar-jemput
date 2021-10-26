import { Image, Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, DashboardOutlined, BankOutlined, LogoutOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import { } from "@ant-design/icons";
import { DashboardPage, TransactionPage } from "../../pages/index";
import useUser from "../../hooks/useUser";

const { Header, Content, Sider } = Layout;

export default function Sidebar() {
  const getCollapseIcon = () => {
    if (collapsed) {
      return <MenuUnfoldOutlined onClick={handleOnCollapse} className="trigger" />;
    }
    return <MenuFoldOutlined onClick={handleOnCollapse} className="trigger" />;
  };

  const [collapsed, setCollapsed] = useState(false);

  const handleOnCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  const [user, setUser, logout] = useUser();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsed={collapsed} handleOnCollapse={handleOnCollapse}>
        <div className="logo">{collapsed ? <Image src="assets/logo-sidebar.png" preview={false} width={35} /> : <Image src="assets/logo-text-sidebar.png" preview={false} />}</div>
        <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline" style={{ marginTop: 50 }}>
          <Menu.Item key="0" icon={<DashboardOutlined />}>
            <Link to="/beranda">Beranda</Link>
          </Menu.Item>
          <Menu.Item key="1" icon={<BankOutlined />}>
            <Link to="/transaksi-baru">Transaksi</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<LogoutOutlined />}
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div>{getCollapseIcon()}</div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/beranda" component={DashboardPage} exact />;
            <Route path="/transaksi-baru" component={TransactionPage} exact />;
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
