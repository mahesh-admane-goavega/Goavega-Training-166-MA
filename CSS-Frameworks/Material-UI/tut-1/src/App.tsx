import React from "react";
import "./App.css";
import { Home } from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchAppBar from "./Components/SearchBar";
import { Tour } from "./Pages/Tour";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
