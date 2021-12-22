import React from "react";
import { Switch, Route } from "react-router-dom";

import ContentsBlog from "../contents/ContentsBlog";
import ContentsCatagory from "../contents/ContentsCatagory";
import ContentsContactUs from "../contents/ContentsContactUs";
import ContentsHomePage from "../contents/ContentsHomePage";

const Routers = () => {
  return (
    <Switch>
      <Route exact component={ContentsHomePage} path="/"></Route>
      <Route component={ContentsCatagory} path="/category"></Route>
      <Route component={ContentsBlog} path="/blog"></Route>
      <Route component={ContentsContactUs} path="/contactus"></Route>

      {/* <OtherRoute component={Page404} path="*"></OtherRoute> */}
    </Switch>
  );
};

export default Routers;
