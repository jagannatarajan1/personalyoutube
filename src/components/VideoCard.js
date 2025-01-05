import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const toggle = useSelector((store) => store.toggle.isSidebarOpen);
  const imageUrl = info?.snippet?.thumbnails?.medium?.url;
  const title = info?.snippet?.title;
  const id = info?.id;
  return (
    <>
      <Link to={"/watch?v=" + id}>
        <div className=" md:m-3 m-2">
          <img
            src={imageUrl}
            alt="thumnail"
            className={!toggle ? "rounded-md  " : "rounded-md  md:w-96 w-full "}
          />
          <p className="text-white font-semibold text-start w-80 py-0.5 ">
            {title}
          </p>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
