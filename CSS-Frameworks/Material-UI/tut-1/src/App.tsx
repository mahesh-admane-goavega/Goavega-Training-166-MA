import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TourCard } from "./Components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchAppBar from "./Components/SearchBar";
import cities from "./data.json";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container
        sx={{
          marginY: 5,
        }}
      >
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h4"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name}
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard tours={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default App;
