import React from "react";
import ButtonList from "./ButtonList";
import VidoeContainer from "./VidoeContainer";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const toggle = useSelector((store) => store.toggle.isSidebarOpen);
  return (
    <div className={toggle ? "col-span-10" : "col-span-12"}>
      <ButtonList />
      <VidoeContainer />
    </div>
  );
};

export default MainContainer;
