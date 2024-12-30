import React from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import ButtonList from "./ButtonList";
import VidoeContainer from "./VidoeContainer";
const MainContainer = () => {
  console.log(YOUTUBE_VIDEO_API);
  return (
    <div className="col-span-10">
      <ButtonList />
      <VidoeContainer />
    </div>
  );
};

export default MainContainer;
