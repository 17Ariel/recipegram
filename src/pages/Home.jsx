import React from "react";
import { useNavigate } from "react-router-dom";
import food from "../assets/food.svg";
import Transition from "../components/Transition";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Transition>
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row xxl:flex-row h-90 justify-center items-center gap-2 sm:gap-14 md:gap-16 lg:gap-16 xl:gap-16 xxl:gap-16 ">
        <img
          src={food}
          className="h-48 sm:h-52 md:h-64 lg:h-72 xl:h-72 xxl:h-72 w-48 sm:w-52 md:w-64 lg:w-72 xl:w-72 xxl:w-72"
        />
        <div className="flex flex-col gap-4 w-72 sm:w-80 md:w-96 lg:w-96 xl:w-96">
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-green-800">
            Recipegram
          </h1>
          <p className="text-md sm:text-lg md:text-lg lg:text-xl xl:text-xl leading-8">
            Wanna try new recipes try recipegram where you can find different
            kinds of recipe using its search functionality.
          </p>
          <button
            onClick={() => navigate("/search")}
            type="button"
            className="bg-green-800 text-white px-4 py-2 w-28 sm:w-32 md:w-32 lg:w-36 xl:w-36 h-10 rounded-md shadow hover:shadow-xl">
            Start Now
          </button>
        </div>
      </div>
    </Transition>
  );
};

export default Home;
