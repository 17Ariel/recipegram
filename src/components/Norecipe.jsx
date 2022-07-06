import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCutlery } from "@fortawesome/free-solid-svg-icons";

const Norecipe = () => {
  return (
    <div className="flex justify-center items-center gap-4 h-norecipe">
      <FontAwesomeIcon icon={faCutlery} className="text-4xl" />
      <h1 className="text-4xl">No recipes found</h1>
    </div>
  );
};

export default Norecipe;
