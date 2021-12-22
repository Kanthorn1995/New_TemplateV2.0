// import logo from "./logo.svg";
import React from "react";
import "./App.less";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Category from "./pages/Category";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";

const { Content } = Layout;

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/category" component={Category} />
      <Route path="/blog" component={Blog} />
      <Route path="/contactus" component={ContactUs} />

      <Route path="/login" component={Login} />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}

export default App;

{
}

//  <Layout className="layout">
//     <HeaderBar />
//     <Content style={{ padding: "0 50px", backgroundColor: "yellow" }}>
//       <div
//         className="site-layout-background"
//         style={{ padding: 24, minHeight: 380 }}
//       >
//         <ConntentApp />
//       </div>
//     </Content>
//     <FooterBar></FooterBar>
//   </Layout>
