import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Components/Navbar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid/Grid";
import { Header } from "./Components/Header/Header";
import { margin } from "@mui/system";

function App() {
  const [title, setTitle] = React.useState<string>("");
  const location = useLocation();
  React.useEffect(() => {
    setTitle(location.pathname.slice(1));
  }, [location]);

  return (
    <>
      <Grid container spacing={0}>
        <Header title={title} />
        <NavBar />
        <Outlet />
      </Grid>
    </>
  );
}

export default App;
