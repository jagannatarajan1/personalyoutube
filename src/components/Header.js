import { React, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/toggleSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { setSelectedSuggestion } from "../utils/suggestionSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const Stored = useSelector((store) => store.suggestion);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [focus, setfocus] = useState(false);

  const [fetchData, setFetchData] = useState([]);
  const focusfunction = (focusaction) => {
    setfocus(focusaction);
  };
  const formHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(focus);

  const ToggleHandler = () => {
    dispatch(toggleSidebar());
  };
  const searchFetchFunction = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchTerm);
    const data = await response.json();
    setFetchData(data);
    console.log(data);
    dispatch(setSelectedSuggestion({ [searchTerm]: data }));
  };
  useEffect(() => {
    if (searchTerm === "") return;
    if (Stored[searchTerm]) {
      setFetchData(Stored[searchTerm]);
    } else {
      const searchResult = setTimeout(() => {
        searchFetchFunction();
      }, 1000);

      return () => {
        clearTimeout(searchResult);
      };
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className=" flex justify-between items-center bg-black  border-lightBlack md:px-4 fixed w-full">
      <div className="flex items-center ">
        <RxHamburgerMenu
          className="  text-2xl text-white pointer hidden md:visibles"
          onClick={ToggleHandler}
        />
        <Link to="/">
          <img
            className="md:h-[4.6rem]  h-12"
            src="https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios.jpg"
            alt="youtube icon"
          />
        </Link>
      </div>

      <div className="flex">
        <div className="">
          <div className="flex">
            <input
              type="text"
              className="md:w-[500px] w-[60%] md:py-1.5 px-6 rounded-l-2xl bg-black text-white border border-lightBlack "
              placeholder="Search"
              onChange={formHandler}
              onFocus={() => focusfunction(true)}
              onBlur={() => focusfunction(false)}
            />
            <button className=" border px-4  rounded-r-2xl border-lightBlack">
              <GoSearch className="text-white md:text-2xl" />
            </button>
          </div>

          {focus && (
            <div className="fixed bg-lightBlack md:w-[500px] w-[60%] md:py-3 md:px-6  rounded-md">
              <ul className="text-white">
                {fetchData.map((ele) => (
                  <div
                    key={ele.show.id}
                    className="flex items-center hover:bg-slate-700 rounded-md"
                  >
                    <GoSearch />
                    <li
                      className="p-0.5 md:ps-3 md:font-semibold text-xs "
                      onBlur={() => focusfunction(false)}
                    >
                      {ele.show.name}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <MdAccountCircle className="text-white text-2xl bg-lightBlack md:mx-3 mx-2" />
    </div>
  );
};

export default Header;
