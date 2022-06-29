import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Recipelist from "./components/Recipelist";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Recipes from "./components/Recipes";
const App = () => {
  return (
    <div className="font-pop">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Recipelist />} />
          <Route path="/:id" element={<Recipes/>}/>
        </Routes>
      <Footer />
      </Router>
    </div>
  );
};

export default App;
