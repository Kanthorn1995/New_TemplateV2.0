import React from "react";
import { Route } from "react-router-dom";
const OtherRoute = (props) => {
  return <> {<Route exact component={props.component} path={props.path} />}</>;
};

export default OtherRoute;
