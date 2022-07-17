import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Recipes from "../pages/Recipes";
import Home from "../pages/Home";
import Search from "../pages/Search";
import About from "../pages/About";
import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Recipes />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
