import React from "react";
import Button from "./Button";

const ButtonList = () => {
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
    <div className="flex overflow-x-auto gap-2 scrollbar-hidden whitespace-nowrap">
      {list.map((item, index) => (
        <Button key={index} item={item} />
      ))}
    </div>
  );
};

export default ButtonList;
