"use client";

import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import defaultUser from "@/public/60111.jpg";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const searchBarRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (screenWidth >= 768 && isSearchBarVisible) setIsSearchBarVisible(false);
  }, [screenWidth]);

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

  // effect for search bar
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        searchBarRef.current &&
        !(searchBarRef.current as HTMLElement).contains(event.target as Node) &&
        isSearchBarVisible
      ) {
        console.log("close drowpdown");
        setIsSearchBarVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [searchBarRef, isSearchBarVisible]);

  return (
    <nav className="flex items-center px-5 py-2 shadow-[0px_-4px_8px_-1px_rgba(0,0,0,1)] md:justify-between">
      {/* logo */}
      <div className="text-[color:var(--fb-blue)] font-bold text-3xl">Logo</div>

      {/* searchbar */}
      {/* TODO: 
        1. When search icon is clicked, show search bar and hide the user icon - DONE
        2. Show dropdown when typing user
      */}
      <div
        ref={searchBarRef}
        className={`${
          isSearchBarVisible && "flex-grow mr-0 py-2"
        } flex items-center bg-gray-100 p-3 rounded-full mx-5 md:rounded-3xl md:py-2 md:max-w-xl md:w-full`}
        onClick={() => setIsSearchBarVisible(true)}
      >
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className={`${
            !isSearchBarVisible && "hidden"
          } bg-transparent outline-none ml-3 w-full md:block`}
        />
      </div>

      {/* User icon */}
      {/* TODO: 
        1. add the arrow down icon on the lower left of the user image 
        2. show dropdown with list of options when clicked
      */}
      {!isSearchBarVisible && (
        <div className="flex items-center ml-auto md:ml-0">
          <div className="w-10 rounded-full overflow-hidden">
            <Image src={defaultUser} alt="user image" className="w-full" />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Nav;
