import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/toggleSlice";
import { useSearchParams } from "react-router-dom";
import Command from "./Command";
import LiveContainer from "./LiveContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchparams] = useSearchParams();
  const videoId = searchparams.get("v");
  useEffect(() => {
    dispatch(closeSidebar());
  });
  return (
    <div className="col-span-12 ">
      <div className=" flex gap-1 flex-col lg:flex-row">
        <div className="col-span-11  ">
          <iframe
            className="xl:w-[1100px] lg:h-[580px] lg:w-[750px] w-full h-[310px] "
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-span-1 xl:w-[25%] w-[98%]">
          <LiveContainer></LiveContainer>
        </div>
      </div>
      <div className="">
        <Command></Command>
      </div>
    </div>
  );
};

export default WatchPage;
