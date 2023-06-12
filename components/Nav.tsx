"use client";

import Image from "next/image";
import {
  FaAngleDown,
  FaAngleRight,
  FaCog,
  FaExclamationCircle,
  FaMoon,
  FaQuestionCircle,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import defaultUser from "@/public/images/user_default_pic.jpg";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import DropdownItem from "./DropdownItem";
import { DUMMY_DATA } from "@/data/user";

const Nav = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isDropdownOptionsVisible, setIsDropdownOptionsVisible] =
    useState(false);
  const [isDropdownSearchVisible, setIsDropdownSearchVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window?.innerWidth);
  const [search, setSearch] = useState("");
  const searchBarRef = useRef(null);
  const dropdownOptionsRef = useRef(null);

  const handleSearchBarClick = () => {
    if (screenWidth >= 768) return;

    setIsSearchBarVisible(true);
  };

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setIsDropdownSearchVisible(true);
  };

  const handleShowUserOptions = () => {
    setIsDropdownOptionsVisible((prevState) => !prevState);
    setIsDropdownSearchVisible(false);
  };

  // effect for input focus
  useEffect(() => {
    if (searchBarRef.current) {
      const input = (searchBarRef.current as HTMLElement)
        .children[1] as HTMLElement;
      input.focus();
    }
  }, [isSearchBarVisible, searchBarRef]);

  // effect for search bar
  useEffect(() => {
    if (screenWidth >= 768 && isSearchBarVisible) {
      setIsSearchBarVisible(false);
    } else if (screenWidth < 768 && search) {
      setIsSearchBarVisible(true);
    }
  }, [screenWidth, search]);

  // effect for window resize
  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // effect for dropdown
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        searchBarRef.current &&
        !(searchBarRef.current as HTMLElement).contains(event.target as Node) &&
        isSearchBarVisible
      ) {
        console.log("close drowpdown");
        setIsSearchBarVisible(false);
        setSearch("");
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [searchBarRef, isSearchBarVisible]);

  // effect for dropdown user options
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        dropdownOptionsRef.current &&
        !(dropdownOptionsRef.current as HTMLElement).contains(
          event.target as Node
        )
      ) {
        console.log("close drowpdown options");
        setIsDropdownOptionsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [dropdownOptionsRef]);

  return (
    <nav className="flex items-center px-5 py-2 shadow-[0px_-4px_8px_-1px_rgba(0,0,0,1)] md:justify-between">
      {/* logo */}
      <div className="text-[color:var(--fb-blue)] font-bold text-3xl cursor-pointer">
        Logo
      </div>

      {/* searchbar */}
      <div
        ref={searchBarRef}
        className={`${
          isSearchBarVisible && "flex-grow mr-0 py-2"
        } relative flex items-center pos bg-gray-100 p-3 rounded-full mx-5 md:rounded-3xl md:py-2 md:max-w-xl md:w-full`}
        onClick={handleSearchBarClick}
      >
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          className={`${
            !isSearchBarVisible && "hidden"
          } bg-transparent outline-none ml-3 w-full md:block`}
          onChange={handleSearchInput}
        />

        {/* dropdown */}
        {isDropdownSearchVisible && (
          <ul className="absolute top-[49px] inset-x-0 drop-shadow-lg bg-white p-2 rounded-md gap-x-5">
            {DUMMY_DATA.map((user) => (
              <DropdownItem
                key={user.name}
                name={user.name}
                userType={user.userType}
                image={defaultUser}
              />
            ))}
          </ul>
        )}
      </div>

      {/* User icon */}
      {/* TODO: 
        1. add the arrow down icon on the lower left of the user image 
        2. show dropdown with list of options when clicked
      */}
      {!isSearchBarVisible && (
        <div className="relative flex items-center ml-auto md:ml-0">
          {/* User image */}
          <div
            className="w-10 rounded-full overflow-hidden cursor-pointer"
            onClick={handleShowUserOptions}
          >
            <Image src={defaultUser} alt="user image" className="w-full" />
            <div className="absolute -right-1 -bottom-1.5 z-20 p-1 rounded-full bg-white">
              <FaAngleDown className="text-sm bg-gray-100 rounded-full" />
            </div>
          </div>

          {/* Dropdown options */}
          {isDropdownOptionsVisible && (
            <div
              ref={dropdownOptionsRef}
              className="absolute top-[49px] right-0 bg-white drop-shadow-lg w-96 p-2 rounded-md"
            >
              <ul>
                <li className="flex items-center cursor-pointer hover:bg-gray-50 rounded-md p-2">
                  <div className="bg-gray-100 rounded-full p-2 mr-5">
                    <FaCog className="text-2xl" />
                  </div>
                  <h3>Settings & Privacy</h3>
                  <FaAngleRight className="ml-auto" />
                </li>
                <li className="flex items-center cursor-pointer hover:bg-gray-50 rounded-md p-2">
                  <div className="bg-gray-100 rounded-full p-2 mr-5">
                    <FaQuestionCircle className="text-2xl" />
                  </div>
                  <h3>Help & Support</h3>
                  <FaAngleRight className="ml-auto" />
                </li>
                <li className="flex items-center cursor-pointer hover:bg-gray-50 rounded-md p-2">
                  <div className="bg-gray-100 rounded-full p-2 mr-5">
                    <FaMoon className="text-2xl" />
                  </div>
                  <h3>Display & Accessability</h3>
                  <FaAngleRight className="ml-auto" />
                </li>
                <li className="flex items-center cursor-pointer hover:bg-gray-50 rounded-md p-2">
                  <div className="bg-gray-100 rounded-full p-2 mr-5">
                    <FaExclamationCircle className="text-2xl" />
                  </div>
                  <h3>Give feedback</h3>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-gray-50 rounded-md p-2">
                  <div className="bg-gray-100 rounded-full p-2 mr-5">
                    <FaSignOutAlt className="text-2xl" />
                  </div>
                  <h3>Log Out</h3>
                </li>
              </ul>

              <p className="text-xs mt-2 text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
                sed.
              </p>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
export default Nav;
