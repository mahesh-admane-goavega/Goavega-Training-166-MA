import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Components/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid/Grid";

function App() {
  return (
    <Grid container>
      <NavBar />
      <Outlet />
    </Grid>
  );
}

export default App;
