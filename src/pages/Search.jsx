import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Spinner from "../components/Spinner";
import Recipe from "../components/Recipe";
import Transition from "../components/Transition";
const Search = () => {
  const [result, setresult] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [search, setsearch] = useState("");

  const searchRecipes = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const api = import.meta.env.VITE_API_KEY;
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=${api}`
      );

      if (!res.ok) {
        setloading(false);
        seterror(e.message);
        return <Error />;
      }
      const data = await res.json();
      const { results } = data;
      setloading(false);
      setresult(results);
    } catch (err) {
      if (err.name === "TypeError") {
        setloading(false);
        setresult([]);
        console.log("Your offline");
      } else {
        setloading(false);
        setresult([]);
        console.log(err);
      }
    }
  };

  if (loading) {
    return <Spinner loading={loading} />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Transition>
      <div className="flex flex-col gap-4 justify-center items-center">
        <form
          className="flex justify-center items-center mt-12"
          onSubmit={searchRecipes}>
          <input
            className="h-12 w-64 md:w-90 lg:w-90 xl:w-90 xxl:w-90 xxl:w-90 outline-none border-none rounded-tl rounded-bl shadow px-4 py-2"
            type="text"
            placeholder="Search Recipes"
            value={search}
            required
            onChange={(e) => setsearch(e.target.value)}
          />
          <button className="h-12 w-16 bg-green-800 text-white rounded-tr rounded-br shadow px-4 py-2">
            <FontAwesomeIcon icon={faSearch} type="submit" />
          </button>
        </form>
        <Recipe recipes={result} />
      </div>
    </Transition>
  );
};

export default Search;
