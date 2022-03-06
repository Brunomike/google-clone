import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/Search/SearchPage";
import {BrowserRouter as Router, Route } from "react-router-dom";
import {Routes} from "react-router";


const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/" element={<Home/>}/>                      
        </Routes>
      </Router>
    </div>
  );
};

export default App;
