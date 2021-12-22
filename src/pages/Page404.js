import React from "react";
import { Result, Button } from "antd";

const Page404 = () => {
  const backHome = () => {
    window.location.replace("/");
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={backHome}>
          Back HomePage
        </Button>
      }
    />
  );
};

export default Page404;
