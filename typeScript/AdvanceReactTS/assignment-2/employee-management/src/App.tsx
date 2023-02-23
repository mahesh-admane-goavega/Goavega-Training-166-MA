import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Main } from "./Features/Main/Main";
import { Route, Routes } from "react-router-dom";
import { NewEmpAdd } from "./Features/EDetails/NewEmpAdd";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
