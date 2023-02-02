import { Layout} from "antd";

import React from "react";
import AddAccounts from "../../module/Sidebar/AddAccounts/AddAccounts";
import AccountsList from "../../module/Sidebar/AccountsList/AccountsList";
const { Sider } = Layout;

const SideBar = ({collapsed}) => {

  return (
      <>
          <Sider trigger={null} collapsible collapsed={collapsed} style={{background:'#EDF4F7', border:"none"}}>
              <div className="logo" />
              <p>Всього на рахунках</p>
              <h1>₴ 1 200</h1>
              <hr/>
              <AddAccounts/>
              <AccountsList/>
          </Sider>
      </>
  )
};
export default SideBar