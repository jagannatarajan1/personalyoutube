import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
const Header = () => {
  return (
    <div className=" flex justify-between items-center bg-black  border-lightBlack px-4">
      <div className="flex items-center ">
        <RxHamburgerMenu className="  text-2xl text-white" />
        <img
          className="h-[4.6rem]"
          src="https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios.jpg"
          alt="youtube icon"
        />
      </div>

      <div className="flex  ">
        <input
          type="text "
          className="w-[500px] py-1.5 px-2 rounded-l-2xl bg-black text-white border border-lightBlack"
          placeholder="Search"
        />
        <button className=" border px-4  rounded-r-2xl border-lightBlack">
          <GoSearch className="text-white text-2xl" />
        </button>
      </div>
      <MdAccountCircle className="text-white text-2xl bg-lightBlack" />
    </div>
  );
};

export default Header;
