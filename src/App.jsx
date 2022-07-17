import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
const App = () => {
  return (
    <div className="font-pop">
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
};

export default App;
