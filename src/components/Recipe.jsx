import React from "react";
import { Link } from "react-router-dom";
const Recipe = ({ recipes }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
      {recipes.map((recipe) => (
        <div
          className="flex flex-col justify-center items-center gap-2 bg-white rounded-sm shadow-sm"
          key={recipe.id}>
          <img alt="img" src={recipe.image} className="h-44 w-72 px-4 py-2" />
          <div className="w-72 h-20 flex justify-center items-center px-4 py-2">
            <Link
              className="text-md text-black hover:text-green-800 cursor-pointer"
              to={`/${recipe.id}`}>
              {recipe.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
