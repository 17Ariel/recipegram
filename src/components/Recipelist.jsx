import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import Spinner from "./Spinner";
import Error from "./Error";
const Recipelist = () => {
  const [result, setresult] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [search, setsearch] = useState("");
  const getCuisines = async (cuisine) => {
    setloading(true);
    const api = import.meta.env.VITE_API_KEY;
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${api}&number=4&cuisines=${cuisine}`
    );
    if (res.ok === false) {
      setloading(false);
      seterror(e.message);
      return <Error />;
    }
    const data = await res.json();
    const { recipes } = data;
    setloading(false);
    setresult(recipes);
  };

  const searchRecipes = async (e) => {
    e.preventDefault();
    setloading(true);
    const api = import.meta.env.VITE_API_KEY;
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=${api}`
    );

    if (res.ok === false) {
      setloading(false);
      seterror(e.message);
      return <Error />;
    }
    const data = await res.json();
    const { results } = data;
    setloading(false);
    setresult(results);
  };

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setloading(true);
        const api = import.meta.env.VITE_API_KEY;
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${api}&number=4`
        );
        const data = await res.json();
        const { recipes } = data;
        setloading(false);
        setresult(recipes);
      } catch (e) {
        setloading(false);
        seterror(e.message);
      }
    };
    getRecipes();
  }, []);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  if (error) {
    return <Error />;
  }

  return (
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
        <button className="h-12 w-16 bg-red-400 text-white rounded-tr rounded-br shadow px-4 py-2">
          <FontAwesomeIcon icon={faSearch} type="submit" />
        </button>
      </form>
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          onClick={() => getCuisines("Italian")}
          className="filter-cuisine">
          Italian
        </button>
        <button onClick={() => getCuisines("Thai")} className="filter-cuisine">
          Thai
        </button>
        <button
          onClick={() => getCuisines("Mexican")}
          className="filter-cuisine">
          Mexican
        </button>
      </div>
      <Recipe recipes={result} />
    </div>
  );
};

export default Recipelist;
