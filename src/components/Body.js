import React from "react";
import Sidemenu from "./Sidemenu";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className=" grid grid-cols-12 bg-black">
      <Sidemenu />
      <MainContainer />
    </div>
  );
};

export default Body;
