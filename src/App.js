import { Button, Layout } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import "moment/locale/zh-cn";
import React, { useState } from "react";
import "./App.css";
moment.locale("zh-cn");

const { Content, Sider } = Layout;

const App = () => {
  document.title = "首页";
  const [showTree, setShowTree] = useState(true);

  const onClick = () => {
    if (showTree) {
      setShowTree(false);
    } else {
      setShowTree(true);
    }
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider theme="light">test</Sider>
      <Content>
        <Layout style={{ height: "100vh" }}>
          {showTree ? <Sider></Sider> : ""}
          <Content>
            <Button onClick={onClick}>隐藏</Button>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default App;
