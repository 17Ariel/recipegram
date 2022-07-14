import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCutlery,
  faHome,
  faBookmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-center gap-16 sm:gap-44 md:gap-72 lg:gap-96 xl:gap-96 xxl:gap-96 items-center h-nav w-full bg-white shadow text-green-800 sticky top-0">
      <h1 className="text-xl">
        <FontAwesomeIcon icon={faCutlery} />
        <span className="ml-1">Recipegram</span>
      </h1>
      <ul className="flex justify-center items-center gap-6 sm:gap-12 md:gap-14 lg:gap-14 xl:gap-16 xxl:gap-16">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-800" : "text-gray-900"
          }>
          <span className="hidden sm:block md:block lg:block xl:block">
            Home
          </span>
          <FontAwesomeIcon
            icon={faHome}
            className="block sm:hidden md:hidden lg:hidden xl:hidden"
          />
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? "text-green-800" : "text-gray-900"
          }>
          <span className="hidden sm:block md:block lg:block xl:block">
            Search
          </span>
          <FontAwesomeIcon
            icon={faSearch}
            className="block sm:hidden md:hidden lg:hidden xl:hidden"
          />
        </NavLink>
        <NavLink
          to="/saved"
          className={({ isActive }) =>
            isActive ? "text-green-800" : "text-gray-900"
          }>
          <span className="hidden sm:block md:block lg:block xl:block">
            Saved
          </span>
          <FontAwesomeIcon
            icon={faBookmark}
            className="block sm:hidden md:hidden lg:hidden xl:hidden"
          />
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
