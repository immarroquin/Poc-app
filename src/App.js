import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  Login  from "./components/Login.jsx";
import  Home  from "./components/Home.jsx";
import Details from "./components/Details.jsx";



function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/details/:pokemonNum" element={<Details />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;

