import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCutlery,
  faBars,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const menu = useRef();

  const togglemenu = () => {
    if (menu.current.classList.contains("flex")) {
      menu.current.classList.remove("flex");
      menu.current.classList.add("hidden");
    } else {
      menu.current.classList.remove("hidden");
      menu.current.classList.add("flex");
    }
  };

  return (
    <>
      <nav className="flex dark:bg-slate-800 dark:text-white justify-center gap-24 sm:gap-40 md:gap-44 lg:gap-48 xl:gap-96 xxl:gap-96 items-center h-nav w-full bg-white shadow text-black sticky top-0">
        <h1 className="text-xl text-green-800">
          <FontAwesomeIcon icon={faCutlery} />
          <span className="ml-1">Recipegram</span>
        </h1>
        <ul className="hidden sm:hidden md:flex lg:flex xl:flex xxl:flex justify-center items-center gap-6 sm:gap-8 md:gap-14 lg:gap-14 xl:gap-16 xxl:gap-16">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-800" : "text-gray-900"
            }>
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "text-green-800" : "text-gray-900"
            }>
            Search
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-green-800" : "text-gray-900"
            }>
            About
          </NavLink>
        </ul>
        <FontAwesomeIcon
          icon={faBars}
          className="text-green-800 cursor-pointer font-bold text-xl flex sm:flex md:hidden lg:hidden xl:hidden xxl:hidden"
          onClick={togglemenu}
        />
      </nav>
      <ul
        ref={menu}
        className="hidden transition-all duration-300 ease-in sticky top-nav gap-4 cursor-pointer justify-center items-center md:hidden lg:hidden xl:hidden xxl:hidden flex-col w-full h-40 bg-white shadow">
        <NavLink
          to="/"
          onClick={togglemenu}
          className={({ isActive }) =>
            isActive ? "text-green-800" : "text-gray-900"
          }>
          Home
        </NavLink>
        <NavLink
          to="/search"
          onClick={togglemenu}
          className={({ isActive }) =>
            isActive ? "text-green-800" : "text-gray-900"
          }>
          Search
        </NavLink>
        <NavLink
          to="/about"
          onClick={togglemenu}
          className={({ isActive }) =>
            isActive ? "text-green-800" : "text-gray-900"
          }>
          About
        </NavLink>
      </ul>
    </>
  );
};

export default Navbar;
