import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
const App = () => {
  return (
    <div className="font-pop">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/:id" element={<Recipes />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
