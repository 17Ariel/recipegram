import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
const Recipes = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const recipes = useRef();

  const print = useReactToPrint({
    content: () => recipes.current,
  });

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
  console.log(data);
  const {
    title,
    image,
    instructions,
    extendedIngredients,
    servings,
    healthScore,
  } = data;
  return (
    <div className="flex flex-col items-center gap-4 rounded-sm shadow-sm mt-3 min-h-custom">
      <div className="flex flex-col gap-6">
        <div className="border-b border-gray-200 flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row xxl:flex-row items-center px-4 py-2 gap-3">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-black">{title}</h1>
            <div className="flex gap-4 justify-center">
              <span className="flex flex-col gap-2 items-center">
                <h2 className="text-xl text-green-800">{servings}</h2>
                <p>Servings</p>
              </span>
              <span className="flex flex-col gap-2 items-center">
                <h2 className="text-xl text-green-800">{healthScore}</h2>
                <p>Health Score</p>
              </span>
            </div>
            <button
              onClick={print}
              className="border-green-800 border-2 px-4 py-2 bg-white text-green-800">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              <span className="font-semibold">Download</span>
            </button>
          </div>
          <img
            alt="img"
            src={image}
            className="w-96 h-64 px-4 py-2 rounded-md"
          />
        </div>
        <div
          className="flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start gap-4 border-b border-gray-200"
          ref={recipes}>
          <h1 className="text-2xl">Name: {title}</h1>
          <div className="flex flex-col gap-2 w-72 md:w-96 lg:w-96 xl:w-96 xxl:w-96">
            <ul className="flex flex-col gap-2 list-disc">
              <h2 className="text-2xl">Ingredients</h2>
              {extendedIngredients?.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-72 md:w-96 lg:w-96 xl:w-96 xxl:w-96 mb-2">
            <h2 className="text-2xl">Instructions</h2>
            <p
              dangerouslySetInnerHTML={{ __html: instructions }}
              className="leading-7"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
