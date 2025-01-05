import React from "react";

const LiveChat = ({ data }) => {
  const { img, name, comment } = data;
  return (
    <div className="flex items-center my-1 mx-1 text-white ">
      <img alt="user" src={img} className="w-9 h-9 rounded-full " />
      <p className="font-bold text-md mx-2">{name}</p>
      <p className="text-sm "> {comment}</p>
    </div>
  );
};

export default LiveChat;
