import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCutlery } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-16 w-full bg-red-400 shadow-sm text-white">
      <h1 className="text-xl">
        <FontAwesomeIcon icon={faCutlery} />
        <span className="ml-1">Recipegram</span>
      </h1>
    </div>
  );
};

export default Navbar;
