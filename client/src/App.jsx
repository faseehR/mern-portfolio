import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./index.css";

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
           <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
         
        </Routes>
      </div>
   
  );
}

export default App;