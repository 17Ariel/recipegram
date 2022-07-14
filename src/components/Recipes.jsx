import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipes = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [show, setshow] = useState("prev");
  useEffect(() => {
    const getRecipes = async () => {
      const api = import.meta.env.VITE_API_KEY;
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api}`
      );
      const data = await res.json();
      setdata(data);
    };
    getRecipes();
  }, []);

  const { title, image, instructions, extendedIngredients } = data;
  return (
    <div className="flex justify-center gap-4 rounded-sm shadow-sm mt-3 min-h-custom flex-wrap">
      <div className="flex flex-col items-center px-4 py-2 gap-3">
        <img alt="img" src={image} className="h-44 w-96 px-4 py-2 rounded-md" />
        <h1 className="text-lg text-black">{title}</h1>
        <button className="border-green-800 border-2 px-4 py-2 bg-white text-green-800">
          <FontAwesomeIcon icon={faBookmark} className="mr-2" />
          <span className="font-semibold">Saved</span>
        </button>
        <ul className="flex flex-col gap-2 list-disc">
          <li className="list-none text-center text-xl">All Ingredients</li>
          {extendedIngredients?.map((ingredient) => (
            <li className="text-center" key={ingredient.id}>
              {ingredient.original}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center w-72 md:w-96 lg:w-96 xl:w-96 xxl:w-96 mb-2">
        <p
          dangerouslySetInnerHTML={{ __html: instructions }}
          className="leading-7"></p>
      </div>
    </div>
  );
};

export default Recipes;
