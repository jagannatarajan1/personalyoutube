import React from "react";

const Button = ({ i, item }) => {
  return (
    <button
      key={i}
      className="bg-lightBlack px-2 py-1 text-center rounded-md text-white"
    >
      {item}
    </button>
  );
};

export default Button;
