import React from "react";
import Sidemenu from "./Sidemenu";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className=" grid grid-cols-12 bg-black pt-20">
      <Sidemenu />
      <Outlet />
    </div>
  );
};

export default Body;
