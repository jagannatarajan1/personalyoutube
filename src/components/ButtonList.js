import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const toggle = useSelector((store) => store.toggle.isSidebarOpen);
  const list = [
    "All",
    "Inbox",
    "Bitcoin",
    "Podcasts",
    "Music",
    "MonetizationOn",
    "MicExternalOnSharp",
    "WebStories",
    "Gaming",
    "Javascript",
    "SavingMoney",
    "Digital",
  ];

  return (
    <div
      className={
        toggle
          ? "flex overflow-x-auto gap-2 scrollbar-hidden whitespace-nowrap md:ms-8"
          : "flex overflow-x-auto gap-2 scrollbar-hidden whitespace-nowrap md:ms-20"
      }
    >
      {list.map((item, index) => (
        <Button key={index} item={item} />
      ))}
    </div>
  );
};

export default ButtonList;
